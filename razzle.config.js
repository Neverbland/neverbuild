const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  modify(config, { target, dev }) {
    const appConfig = Object.assign({}, config);
    const isServer = target !== 'web';

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
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
          ],
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

    return appConfig;
  }
};
