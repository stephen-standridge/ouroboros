var path = require('path');

module.exports = {
  entry: {
    constructor: './src/constructor.jsx',
    configuration: './src/configuration.js'
  },
  module: {
    loaders: [{
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
    extensions: ['', '.js', '.jsx']
  },
  output: {
    library: '[name]',
    libraryTarget: 'var',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  }
};