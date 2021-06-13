const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWeppackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
	output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.css$/i, use: ['style-loader', 'css-loader'] },
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWeppackPlugin({
			patterns: [
        'public/logo.png',
        'public/manifest.json',
        'public/robots.txt'
			]
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
			minify: {
				collapseWhitespace: true,
				minifyJS: true,
				removeComments: true
			}
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9000,
	}
};