import {
	PluginSidebar,
	PluginSidebarMoreMenuItem,
	PluginMoreMenuItem,
} from '@wordpress/edit-site';
import { PanelBody } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

const PluginSidebarDemo = () => (
	<>
		<PluginMoreMenuItem
			href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
			target="_blank"
			rel="noopener noreferrer"
		>
			SlotFill Reference Guide
		</PluginMoreMenuItem>

		<PluginSidebar
			name="plugin-sidebar-test"
			title="Plugin Sidebar"
			icon="palmtree"
		>
			<PanelBody>
				<p>Plugin Sidebar</p>
			</PanelBody>
		</PluginSidebar>
	</>
);
export default PluginSidebarDemo;

registerPlugin('fse-sidebar-test', { render: PluginSidebarDemo });
