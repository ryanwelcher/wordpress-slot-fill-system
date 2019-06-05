const { registerPlugin } = wp.plugins;
const { PluginSidebar } = wp.editPost;
const { PanelBody } = wp.components;

const PluginSidebarTest = () => {
	return(
		<PluginSidebar
			name='plugin-sidebar-test'
			title='My Plugin'
			icon="smiley"
		>
			<PanelBody>
				<p>Plugin Sidebar</p>
			</PanelBody>
		</PluginSidebar>
	)
};
registerPlugin( 'plugin-sidebar-test', { render: PluginSidebarTest } );
