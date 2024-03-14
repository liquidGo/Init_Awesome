const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 3010,
    open: true
  },
  devtool: 'inline-source-map',

})