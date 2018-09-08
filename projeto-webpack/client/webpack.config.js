const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
  let plugins : any[]
let plugins = [];

module.exports = {
  entry: './app-src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')

  },
  module: {

    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
      }
    ]
  },
  plugins
}
