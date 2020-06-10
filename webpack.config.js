const path = require( 'path' );
const WebpackBar = require( 'webpackbar' );
const marked = require( 'marked' );
const markdownRenderer = new marked.Renderer();
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		slotfill: './assets/js/slotfill/index.js',
		blocks: './assets/js/blocks/index.js',
		dashboard: './assets/js/dashboard/index.js',
		admin: './assets/js/admin/index.js',
		datastore: './assets/js/admin/datastore',
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist' ),
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
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
		],
	},
	plugins: [
		...defaultConfig.plugins,
		// Fancy WebpackBar.
		new WebpackBar(),
	],
};
