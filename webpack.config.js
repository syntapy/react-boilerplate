const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './src/main.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './build'),
	},
}
