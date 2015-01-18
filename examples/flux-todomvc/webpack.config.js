var webpack = require('webpack');

var path = require('path');

var port = JSON.parse(process.env.npm_package_config_port || 8080),
  subdomain =   "",//JSON.parse(/*process.env.npm_package_config_subdomain*/ ""),
  url = subdomain ?
  'https://' + subdomain + '.localtunnel.me' :
  'http://localhost:' + port;

module.exports = {
  // Set to 'eval' for now for fast rebuilding; turn on source-map as needed
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?' + url,
    './js/app'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    /*new webpack.HotModuleReplacementPlugin(),*/
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loader:'component-flow!jsx?harmony' },
      { test: /\.scss$/, loader: "style!css!sass"},
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.ttf$/, loader: "file" }
    ]
  }
};