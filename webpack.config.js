const path = require('path');
const build = path.resolve(__dirname, 'src/dist');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {index: ['./src/index.ts']},
    output: {
        path: build,
        filename: 'bundle.js'
    },
    resolve: {
        alias : {
            Styles: path.resolve(__dirname, 'src/css'),
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
			},
            {
                test: /\.(woff|woff2|eot|ttf|gif|png|jpe?g|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    { loader: 'fest-webpack-loader' }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ]
};