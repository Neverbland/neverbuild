module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            includePaths: ['/static/images/sprite'],
            symbolId: '[name]_[hash]',
            esModule: false
          }
        }
      ]
    });
    return config;
  }
};
