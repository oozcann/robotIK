const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, options) => {

	const devMode = options.mode !== 'production';
	const defStyle = [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'];
    return {
		mode: devMode ? 'development' : 'production',
		entry: {
			main: {import: './app/js/modules/app-main.js', dependOn: 'shared'},
			shared: 'lodash'
		},
		devServer: {
			static: './dist',
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.css$/i,
					use: defStyle
				},
				{
					test: /\.scss$/i,
					use: defStyle
				},
				{
                  test: /\.html$/,
                  use: 'html-loader'
                },
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'app/main.html'
			}),
			new MiniCssExtractPlugin({
				filename: 'asset/styles/[name].[contenthash].css',
				ignoreOrder: true,
				chunkFilename: '[id].css'
			}),
			new webpack.ProvidePlugin({ //global değişken olarak kullanmamızı sağlar. Her js içinde import etmeye gerek kalmaz.
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery',
                'global.jQuery': 'jquery',
                'global.$': 'jquery',
                 moment: 'moment'
            })
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		}
	}
};