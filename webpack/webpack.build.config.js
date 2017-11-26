var _          = require('lodash');
var path       = require('path');
var webpack    = require('webpack');
var baseConfig = require('./base.config');
var scripts    = require('./scripts');
var Clean      = require('clean-webpack-plugin');

var config = _.merge(baseConfig, {
    devtool: 'cheap-module-source-map ',
    plugins: [
        new Clean('../web/build'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {
                comments: false
            },
            //comments: 'all',
            minimize: true,
            sourceMap: false,
            exclude: [/node_modules/]
        }),
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
    ].concat(baseConfig.plugins)
});

module.exports = config;