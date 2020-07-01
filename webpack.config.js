const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // the file where we begin the bundle process
  entry: './index.js',

  // where we are going to emit the new bundled file
  output: {
    path: path.resolve(__dirname, 'dist'), // has to be an absolute path
    filename: 'modal.js',
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
