const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );


/** @type {import('webpack').Configuration} */


module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
            },
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts' ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        } ),
        new MiniCssExtractPlugin(),

    ]
}