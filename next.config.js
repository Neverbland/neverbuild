module.exports = {
  webpack: config => {
    config.module.rules.push(
      {
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
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
              configFile: '.eslintrc.js'
            }
          }
        ]
      }
    );
    return config;
  }
};
