const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// Contains all the configurations for dev
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
