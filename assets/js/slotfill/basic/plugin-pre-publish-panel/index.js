const { PluginPrePublishPanel } = wp.editPost;

const PluginPrePublishPanelDemo = () => (
	<PluginPrePublishPanel
		className="custom-panel-class"
		initialOpen={ true }
		title="My Custom Panel"
	>
		<p> Pre Publish Panel </p>
	</PluginPrePublishPanel>
);
export default PluginPrePublishPanelDemo;
