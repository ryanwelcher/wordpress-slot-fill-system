const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		'edit-site': './src/slots/edit-site',
		'edit-post': './src/slots/edit-post',
		dashboard: './src/dashboard',
	},
};
