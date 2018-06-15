var webpack = require('webpack');
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

var parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    devtool: 'source-map',
})
