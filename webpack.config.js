const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Abstract Webpack config
const config = {
    entry: path.resolve(__dirname, 'src/main.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, 'src/styles/globals/vars.scss'),
                                path.resolve(__dirname, 'src/styles/globals/mixins.scss')]
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './images'
                },
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/main.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
}

module.exports = config;
