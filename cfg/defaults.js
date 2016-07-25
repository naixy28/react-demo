'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
function getDefaultModules() {
  return {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: srcPath,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  };
}
module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  postcss: function () {
    return [];
  }
};