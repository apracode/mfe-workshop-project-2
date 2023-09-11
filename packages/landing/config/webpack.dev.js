const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common");
const {merge} = require('webpack-merge');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	devServer: {
		port: 4041,
		open: ['/landing'],
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
				name: 'landing',
				filename: 'remoteEntry.js',
				exposes: {
						'./Landing': "./src/bootstrap"
				},
				shared: packageJson.dependencies
		}),
		new HTMLWebpackPlugin({
				template: './public/index.html'
		}),
]
}

module.exports = merge(commonConfig, devConfig);