const path = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const WebpackBar = require( 'webpackbar' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const marked = require( 'marked' );
const markdownRenderer = new marked.Renderer();

module.exports = {
	entry: {
		slotfill: './assets/js/slotfill/index.js',
		blocks: './assets/js/blocks/index.js',
		dashboard: './assets/js/dashboard/index.js',
		settings: './assets/js/settings/index.js',
		'settings-datastore': './assets/js/settings/datastore',
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
					{
						loader: 'html-loader',
					},
					{
						loader: 'markdown-loader',
						options: {
							pedantic: true,
							gfm: true,
							renderer: markdownRenderer,
						},
					},
				],
			},
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
