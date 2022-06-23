const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './main.jsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		static: './dist',
	},
	resolve: {
		extensions: ['.jsx', '.ts', '.js'],
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
}
