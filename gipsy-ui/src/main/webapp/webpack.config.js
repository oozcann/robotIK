const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ROOT = path.resolve(__dirname, '.');

const root = function (args) {
	return path.join(ROOT, args);
};

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
			port: 1111,
			proxy: {
                '/api': 'http://localhost:3000'
              }
		},
		/*
		proxy: {
            '/api/': {
                target: 'http://localhost:3000/api/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },
        */
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
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    type: 'javascript/auto'
                }
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
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: root('app/asset'),
                        to: 'asset'
                    }
                ]
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