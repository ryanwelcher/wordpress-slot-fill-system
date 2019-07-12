const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelDemo = () => (
	<PluginPrePublishPanel
		className='custom-panel-class'
		initialOpen={ true }
	>
		<p> Pre Publish Panel </p>
	</PluginPrePublishPanel>
);
export default PluginPrePublishPanelDemo;
