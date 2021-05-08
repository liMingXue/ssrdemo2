const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
    entry: './src/entry-client.js',
    output: {
        filename: 'js/[name].[hash:4].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'http://localhost:8088/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            'targets': '> 0.25%, not dead',
                            'useBuiltIns': 'usage',
                            'corejs': 3
                        }]
                    ],
                },
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new VueSSRClientPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "../src")
        }
    }
}