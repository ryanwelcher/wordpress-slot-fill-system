const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelDemo = () => (
	<PluginPrePublishPanel
		className='custom-panel-class'
		title='My Custom Panel'
		initialOpen={ true }
	>
		<p> Pre Publish Panel </p>
	</PluginPrePublishPanel>
);

registerPlugin( 'pre-publish-panel-demo', { render: PluginPrePublishPanelDemo } );
