const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({  })
        ],
    },

    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
        }),
    ],

    mode: 'production'
});
