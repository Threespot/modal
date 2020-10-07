const path = require('path');

// Contains all the configurations shared between dev and production
module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // has to be an absolute path
    filename: '[name].bundle.js',
  },
  // Loaders
  module: {
    // Takes our ES6 javascript and make it compatible w/ browsers old and new
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
