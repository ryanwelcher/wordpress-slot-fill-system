const path = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const WebpackBar = require( 'webpackbar' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

module.exports = {
	entry: {
		slotfill: './assets/js/slotfill/index.js',
		blocks: './assets/js/block/index.js',
		dashboard: './assets/js/dashboard/index.js',
		settings: './assets/js/settings-page/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					fix: true,
				},
			},
		],
	},
	plugins: [
		// Clean the `dist` folder on build.
		new CleanWebpackPlugin(),

		// Fancy WebpackBar.
		new WebpackBar(),

		// Extract dependencies.
		new DependencyExtractionWebpackPlugin(),
	],
};
