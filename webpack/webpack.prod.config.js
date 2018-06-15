var webpack = require('webpack');
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');


module.exports = merge(common, {

    devtool: 'source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
})
