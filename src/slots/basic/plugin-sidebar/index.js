const { registerPlugin } = wp.plugins;
const { PluginSidebar } = wp.editPost;
const { PanelBody } = wp.components;
import { TenUp } from '../../../svg/icons';

const PluginSidebarDemo = () => (
		<PluginSidebar
			name='plugin-sidebar-test'
			title='Plugin Sidebar'
			icon='palmtree'
		>
			<PanelBody>
				<p>Plugin Sidebar</p>
			</PanelBody>
		</PluginSidebar>
);
registerPlugin( 'plugin-sidebar-demo', { render: PluginSidebarDemo } );
