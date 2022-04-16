const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

// Development Webpack config
const config = require(path.resolve(__dirname, 'webpack.config.js'));
const dev = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist/scripts/'),
        filename: 'main.js',
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

module.exports = { ...config, ...dev };
