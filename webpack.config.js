var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch: true,
  entry: {
    constructor: './src/constructor.jsx',
    configuration: './src/configuration.js'
  },
  module: {
    loaders: [
    { test: /\.css$/, 
      loader: ExtractTextPlugin.extract({
        notExtractLoader: "style-loader",
        loader: "css-loader"
      }) 
    },    
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
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
      new ExtractTextPlugin("styles.css")
  ],
  output: {
    library: '[name]',
    libraryTarget: 'var',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  }
};