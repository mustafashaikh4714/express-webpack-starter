const webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const config = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
  entry: './app.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config
