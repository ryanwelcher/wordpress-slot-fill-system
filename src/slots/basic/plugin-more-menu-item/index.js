const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem,} = wp.editPost;

const MyButtonMoreMenuItemTest = () => (
	<PluginMoreMenuItem
		href="https://10up.com"
	>
		More Menu Item
	</PluginMoreMenuItem>
);

registerPlugin( 'extending-gutenberg/more-menu-item-test', { render: MyButtonMoreMenuItemTest, icon: "smiley" } );
