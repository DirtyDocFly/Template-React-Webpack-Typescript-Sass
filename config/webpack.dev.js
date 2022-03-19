const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Development Webpack config
const config = require('../webpack.config.js');
const dev = {
    mode: "development",
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, '../demo'),
        filename: 'kmn.js',
        libraryTarget: 'umd',
        library: 'kmn',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../demo'),
        },
        compress: true,
        port: 9000,
    },
}

module.exports = {...config, ...dev};
