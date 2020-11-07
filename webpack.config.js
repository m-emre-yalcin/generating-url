const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './test',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\\.js?$/,
                loader: 'babel-loader',
                options: {
                    presents: ['es2015']
                }
            },
        ]
    },
}