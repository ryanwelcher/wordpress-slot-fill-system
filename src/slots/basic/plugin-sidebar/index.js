const { PluginSidebar } = wp.editPost;
const { PanelBody } = wp.components;

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
export default PluginSidebarDemo;
