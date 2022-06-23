const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './src/main.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
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
		extensions: ['.jsx', '.js'],
	},
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '',
		filename: 'bundle.js',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}
