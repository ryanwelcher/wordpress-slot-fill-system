const { registerPlugin } = wp.plugins;
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

registerPlugin( 'post-publish-panel-demo', { render: PluginPostPublishPanelDemo } );
