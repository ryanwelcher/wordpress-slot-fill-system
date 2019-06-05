const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelTest = () => {
	return (
		<PluginPrePublishPanel
			className='custom-panel-class'
			title='Panel Title'
			initialOpen={ true }
		>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
};

registerPlugin( 'pre-publish-panel-test', { render: PluginPrePublishPanelTest } );
