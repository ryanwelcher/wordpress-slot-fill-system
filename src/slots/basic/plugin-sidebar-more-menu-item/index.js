const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody } = wp.components;

const PluginSidebarMoreMenuItemDemo = () => (
	<>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
			icon="smiley"
		>
			PluginSidebarMoreMenuItem - Menu Item
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			icon="smiley"
			title="PluginSidbarMoreMenuItem"
		>
			<PanelBody>
				PluginSidebarMoreMenuItem - Panel Content
			</PanelBody>
		</PluginSidebar>
	</>
);
export default PluginSidebarMoreMenuItemDemo;
