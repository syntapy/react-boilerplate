const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.jsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		static: path.join(__dirname, './build')
	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '',
		filename: 'bundle.js',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}
