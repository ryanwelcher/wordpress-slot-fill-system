const { PluginPostPublishPanel } = wp.editPost;

const PluginPostPublishPanelDemo = () => (
	<PluginPostPublishPanel
		className='custom-panel-class'
		title='My Custom Panel'
		initialOpen={ true }
	>
		<p>Post Publish Panel</p>
	</PluginPostPublishPanel>
);
export default PluginPostPublishPanelDemo
