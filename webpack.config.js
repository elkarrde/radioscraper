var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        "main": ['./ui/scripts/main.jsx'],
        "plays": ['./ui/scripts/plays.jsx'],
        "stats": ['./ui/scripts/stats.jsx'],
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(["css-loader"]),
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
          test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
          loader: 'file-loader',
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}
