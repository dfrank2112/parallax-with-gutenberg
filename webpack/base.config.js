const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const DIST_DIR = path.resolve(__dirname, '../build');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Extract editor.css for editor styles.
const blocksEditCSS = new ExtractTextPlugin({
    filename: './css/blocks-edit.css',
});

// Extract save.css for editor styles.
const blocksSaveCSS = new ExtractTextPlugin({
    filename: './css/blocks-save.css',
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
    use: [
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins: () => [autoprefixer()]
            }
        },
        'sass-loader'
    ]
};

module.exports = {
    entry: {
        blocks: ['./src/blocks.js', './src/styles/blocks-edit.scss', './src/styles/blocks-save.scss'],
        react: ['./src/react.js']
    },

    output: {
        path: DIST_DIR,
        filename: './js/[name].min.js',
    },

    externals: {
        'react' : 'React',
        'react-dom' : 'ReactDOM'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /blocks-edit\.s?css$/,
                exclude: /node_modules/,
                use: blocksEditCSS.extract( extractConfig ),
            },
            {
                test: /blocks-save\.s?css$/,
                exclude: /node_modules/,
                use: blocksSaveCSS.extract( extractConfig ),
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },

    plugins: [
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(
            ['../build'],
            { allowExternal: true }
        ),
        blocksEditCSS,
        blocksSaveCSS
    ],
};
