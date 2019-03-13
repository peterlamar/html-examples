// webpack v4
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'node', // update from 23.12.2018
    externals: [nodeExternals()], // update from 23.12.2018
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "style.css"
        }),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './src/index.html',
          filename: 'index.html'
        })
    ],
};