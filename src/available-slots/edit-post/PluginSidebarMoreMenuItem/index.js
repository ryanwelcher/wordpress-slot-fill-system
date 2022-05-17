/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-sidebar-more-menu-item', {
	render: () => (
		<>
			<PluginSidebarMoreMenuItem target="sidebar-name">
				{ __(
					'PluginSidebarMoreMenuItem - Menu Item',
					'gutenberg-slot-fill-system'
				) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="sidebar-name"
				title="PluginSidebarMoreMenuItem"
			>
				<PanelBody>
					{ __(
						'PluginSidebarMoreMenuItem - Panel Content',
						'gutenberg-slot-fill-system'
					) }
				</PanelBody>
			</PluginSidebar>
		</>
	),
	icon: Avocado,
} );
