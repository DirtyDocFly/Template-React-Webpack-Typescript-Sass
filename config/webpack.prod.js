const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

// Production Webpack config
const config = require('../webpack.config.js');
const prod = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'kmn.js',
        libraryTarget: 'umd',
        library: 'kmn',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: true,
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
}
module.exports = {...config, ...prod };
