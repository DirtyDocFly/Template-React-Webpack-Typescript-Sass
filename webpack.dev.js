const path = require('path');

// Development Webpack config
const config = require(path.resolve(__dirname, 'webpack.config.js'));
const dev = {
    mode: "development",
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/scripts/'),
        filename: 'main.js',
        libraryTarget: 'umd',
        library: 'app',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    }
}

module.exports = { ...config, ...dev };
