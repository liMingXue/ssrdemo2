const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf')
const path = require('path')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: false,
        host: 'localhost',
        port: '8088',
        compress: true,
        disableHostCheck: true
    }
})