var _          = require('lodash');
var path       = require('path');
var webpack    = require('webpack');
var baseConfig = require('./base.config');
var scripts    = require('./scripts');

var config = _.merge(baseConfig, {
    devtool: 'eval',
    devServer: {
        contentBase: 'web',
        devtool: 'eval',
        port: 8081,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        proxy: {
            '/': {
                target: 'http://localhost:8081',
                rewrite: function (req) {
                    req.url = 'http://localhost:8081/assets/index.html';
                }
            }
        }
    }
});

module.exports = config;