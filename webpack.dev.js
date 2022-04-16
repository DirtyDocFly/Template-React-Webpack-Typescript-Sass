const path = require('path');

// Development Webpack config
const config = require(path.resolve(__dirname, 'webpack.config.js'));
const dev = {
    mode: "development",
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'main.js',
        libraryTarget: 'umd',
        library: 'app',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        compress: true,
        port: 9000,
    }
}

module.exports = { ...config, ...dev };
