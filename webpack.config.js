const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/dev-server',
        './scripts/index'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'scripts')
            }
        ]
    }
};
