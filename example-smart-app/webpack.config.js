const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin(
    path.resolve(__dirname, 'src/bundle.js')
);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: [
        '@babel/polyfill', './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        cleanWebpackPlugin,
        htmlWebpackPlugin
    ],
    devServer: {
        port: 3001
    }
}