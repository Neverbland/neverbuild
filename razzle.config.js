// Based on: https://gist.github.com/jaredpalmer/0a91a7bd354b875b913c74f4b16125f7

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  modify: (config, { target, dev }) => {
    const appConfig = config;
    return appConfig;
  }
};
