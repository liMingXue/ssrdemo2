
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf')
const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const WebpackExternals = require('webpack-node-externals')

module.exports = merge(baseConfig, {
    target: 'node',
    mode: 'development',
    entry: './src/entry-server.js',
    devtool: 'source-map',
    output: {
        filename: 'server.build.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'"development"',
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()
    ],
    externals: [WebpackExternals()]
})
