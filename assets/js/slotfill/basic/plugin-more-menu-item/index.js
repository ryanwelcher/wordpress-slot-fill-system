const { PluginMoreMenuItem } = wp.editPost;

const MyButtonMoreMenuItemDemo = () => (
	<PluginMoreMenuItem
		href="https://10up.com/careers"
		target="_blank"
		rel="noopener noreferrer"
	>
		10up is hiring!
	</PluginMoreMenuItem>
);

export default MyButtonMoreMenuItemDemo;
