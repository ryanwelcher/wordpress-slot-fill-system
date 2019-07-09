const { registerPlugin } = wp.plugins;
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
			title="My Sidebar"
		>
			<PanelBody>
				PluginSidebarMoreMenuItem demo content
			</PanelBody>
		</PluginSidebar>
	</>
);

registerPlugin( 'plugin-sidebar-expanded-demo', { render: PluginSidebarMoreMenuItemDemo } );
