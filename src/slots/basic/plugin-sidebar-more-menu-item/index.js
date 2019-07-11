const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody } = wp.components;

const PluginSidebarMoreMenuItemDemo = () => (
	<>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
		>
			PluginSidebarMoreMenuItem - Menu Item
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			title="PluginSidbarMoreMenuItem"
		>
			<PanelBody>
				PluginSidebarMoreMenuItem - Panel Content
			</PanelBody>
		</PluginSidebar>
	</>
);
export default PluginSidebarMoreMenuItemDemo;
