var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.join(__dirname, 'src');
var BUILD_DIR = path.join(__dirname, 'public');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CristianCepeda',
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}

module.exports = config;
