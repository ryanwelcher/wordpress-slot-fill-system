/*global alert*/
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-block-settings-menu-item', {
	render: () => (
		<PluginBlockSettingsMenuItem
			allowedBlocks={ [ 'core/paragraph' ] }
			label={ __(
				'PluginBlockSettingsMenuItem Text',
				'gutenberg-slot-fill-system'
			) }
			onClick={ () => {
				// eslint-disable-next-line no-alert
				alert( 'clicked' );
			} }
		/>
	),
	icon: Avocado,
} );
