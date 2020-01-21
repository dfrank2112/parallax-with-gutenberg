const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge(baseConfig, {
    watch: true,
    mode: 'development',
    plugins: [
        new LiveReloadPlugin()
    ]
});
