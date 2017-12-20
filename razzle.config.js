const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  modify(config, { target, dev }) {
    const appConfig = Object.assign({}, config);
    const isServer = target !== 'web';

    // Import Resolving
    // ====================
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    appConfig.resolve.modules.push('src');

    // ESLint
    // ====================
    appConfig.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['razzle/babel'],
            plugins: ['transform-react-jsx']
          }
        },
        {
          loader: 'eslint-loader',
          options: {
            emitError: true,
            configFile: '.eslintrc.js'
          }
        }
      ]
    });

    // SCSS Modules
    // ====================
    // Options for PostCSS as we reference these options twice
    // Adds vendor prefixing to support IE9 and above
    const postCSSLoaderOptions = {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      sourceMap: true,
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          flexbox: 'no-2009'
        })
      ]
    };

    if (dev) {
      appConfig.module.rules.push({
        test: /\.scss$/,
        use: isServer
          ? [
            'isomorphic-style-loader',
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: require.resolve('sass-loader')
            }
          ]
          : [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: postCSSLoaderOptions
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true
              }
            }
          ]
      });
    } else if (!dev && !isServer) {
      appConfig.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false
            }
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: postCSSLoaderOptions
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true
              }
            }
          ]
        })
      });

      appConfig.plugins.push(
        new ExtractTextPlugin('static/css/[name].[contenthash:8].css')
      );
    } else if (!dev && isServer) {
      appConfig.module.rules.push({
        test: /\.scss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true
            }
          }
        ]
      });
    }

    // SVG Sprite
    // ====================
    appConfig.module.rules[2].exclude.push(resolveApp('src/images/sprite'));
    appConfig.module.rules.push({
      test: /\.svg$/,
      include: [resolveApp('src/images/sprite')],
      use: [
        {
          loader: require.resolve('svg-sprite-loader'),
          options: {
            symbolId: '[name]_[hash]',
            esModule: false
          }
        }
      ]
    });

    return appConfig;
  }
};
