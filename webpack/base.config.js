var _                             = require('lodash');
var path                          = require('path');
var webpack                       = require('webpack');
var argv                          = require('yargs').argv;
var scripts                       = require('./scripts');
var autoprefixer                  = require('autoprefixer');
var ExtractTextPlugin             = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin             = require('html-webpack-plugin');

var rootDir = path.resolve(__dirname, '../');

var node_modules = path.resolve(rootDir, 'node_modules');

if (argv.inline && argv.hot) {
    scripts.aliases.react = '/node_modules/react/react.js';
} else {
    scripts.noParse.push('react');
}

var aliases = _.mapValues(scripts.aliases, function (scriptPath) {
    return path.resolve(rootDir + scriptPath);
});

module.exports = {
    context: rootDir,
    resolve: {
        alias: aliases,
        extensions: ['', '.js', '.jsx']
    },
    entry: _.merge({main: './src/Main.jsx'}, scripts.chunks),
    output: {
        path: path.resolve(__dirname, '../web/assets'),
        publicPath: '/assets/',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/chunk.[id].[hash].js',
        pathinfo: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: (argv.inline && argv.hot ? ['react-hot', 'babel'] : ['babel']),
            exclude: [/node_modules/]
        },{
            test: /\.less$/,
            exclude: [/node_modules/],
            loader: ExtractTextPlugin.extract('style', 'css!less!postcss')
        }, {
            test: /(\.gif|\.png|\.jpg)/,
            exclude: [/node_modules/],
            loader: 'url',
            query: {
                limit: 10000,
                name: 'img/[name].[hash].[ext]'
            }
        }, {
            test: /(\.otf|\.woff|\.woff2|\.svg|\.eot|\.ttf)/,
            exclude: [/node_modules/],
            loader: 'url',
            query: {
                limit: 10000,
                name: 'fonts/[name].[hash].[ext]'
            }
        }, {
            test: /\.html$/,
            exclude: [/node_modules/],
            loader: 'html'
        }],
        noParse: _.values(_.pick(aliases, scripts.noParse))
    },
    postcss: [
        autoprefixer({browsers: ['last 10 versions']})
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.[hash].js', Infinity),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template/index.html'),
            filename: '../index.html',
            chunks: ['vendor', 'main']
        }),
        new ExtractTextPlugin('css/[name].[hash].css', {
            allChunks: true 
        })
    ]
};