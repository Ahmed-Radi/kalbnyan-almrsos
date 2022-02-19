const path = require('path')

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', './src/edit.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        devMiddleware: {
            publicPath: '/scripts/'
        },
        // open: true, // To open browser automatically after running code
        hot: "only",
    },
    devtool: 'source-map',
}