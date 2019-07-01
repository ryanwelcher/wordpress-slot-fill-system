const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;
const { Fill, PanelBody } = wp.components;

const PluginPrePublishPanelTest = () => {
	return (
		<>
			<PluginPrePublishPanel
				className='custom-panel-class'
				title='Panel Title2 '
				initialOpen={ true }
			>
				<p> Pre Publish Panel </p>
			</PluginPrePublishPanel>

			<Fill name="PluginPrePublishPanel">
				<PanelBody title={"test thing"}>
					Test thing
				</PanelBody>
			</Fill>
		</>
	)
};

registerPlugin( 'pre-publish-panel-test', { render: PluginPrePublishPanelTest } );
