const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

// Contains all the configurations that are needed for production build

module.exports = merge(common, {
  mode: 'production',
});
