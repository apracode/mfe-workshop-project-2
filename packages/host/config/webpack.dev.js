const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 4040,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                landing: 'landing@http://localhost:4041/remoteEntry.js'
            },
            shared: packageJson.dependencies
        })
    ]
};


module.exports = merge(commonConfig, devConfig);