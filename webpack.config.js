var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
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
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
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