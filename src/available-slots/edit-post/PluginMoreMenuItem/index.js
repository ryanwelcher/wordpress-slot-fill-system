/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-more-menu-item', {
	render: () => (
		<PluginMoreMenuItem
			href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ __( 'SlotFill Reference Guide', 'gutenberg-slot-fill-system' ) }
		</PluginMoreMenuItem>
	),
	icon: Avocado,
} );
