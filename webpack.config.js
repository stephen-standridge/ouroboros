var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

var extractCSS = new ExtractTextPlugin("stylesheets/[name].css");

module.exports = {
  watch: true,
  entry: {
    constructor: './src/constructor.jsx',
    configuration: './src/configuration.js'
  },
  module: {
    loaders: [
    { test: /\.scss$/, loader: extractCSS.extract(['css','sass']) },
    { test: /\.css$/, loader: extractCSS.extract(['css']) },
    {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [ extractCSS ],
  output: {
    library: '[name]',
    libraryTarget: 'var',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  }
};
