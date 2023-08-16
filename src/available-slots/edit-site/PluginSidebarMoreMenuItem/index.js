/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebarMoreMenuItem } from '@wordpress/edit-site';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-site-plugin-sidebar-more-menu-item', {
	render: () => (
		<>
			<PluginSidebarMoreMenuItem target="sidebar-name">
				{ __(
					'Site Editor Example: PluginSidebarMoreMenuItem - Menu Item',
					'gutenberg-slot-fill-system'
				) }
			</PluginSidebarMoreMenuItem>
		</>
	),
	icon: Avocado,
} );
