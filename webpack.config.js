const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'edit-post': './src/slots/edit-post',
		'edit-site': './src/slots/edit-site',
	},
};
