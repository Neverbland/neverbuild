const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            includePaths: ['/images/sprite'],
            symbolId: '[name]_[hash]',
            esModule: false
          }
        }
      ]
    });
    return config;
  }
};
