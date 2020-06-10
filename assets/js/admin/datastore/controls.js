/**
 * WordPress dependencies
 */

import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { GET_SETTINGS, SAVE_SETTINGS } from './constants';

const controls = {
	[ GET_SETTINGS ]: async () => {
		const settings = await apiFetch( {
			path: 'wp/v2/settings',
		} );
		return settings;
	},
	[ SAVE_SETTINGS ]: async ( { payload } ) => {
		const response = await apiFetch( {
			path: 'wp/v2/settings',
			method: 'POST',
			data: { extending_gutenberg: JSON.stringify( payload ) },
		} );
		return response;
	},
};

export default controls;
