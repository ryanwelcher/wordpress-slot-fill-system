/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';

const EditPostPluginSidebarMoreMenuItemExample = () => (
	<>
		<PluginSidebarMoreMenuItem target="sidebar-name">
			{ __(
				'PluginSidebarMoreMenuItem - Menu Item',
				'gutenberg-slot-fill-system'
			) }
		</PluginSidebarMoreMenuItem>
		<PluginSidebar name="sidebar-name" title="PluginSidebarMoreMenuItem">
			<PanelBody>
				{ __(
					'PluginSidebarMoreMenuItem - Panel Content',
					'gutenberg-slot-fill-system'
				) }
			</PanelBody>
		</PluginSidebar>
	</>
);
export default EditPostPluginSidebarMoreMenuItemExample;
