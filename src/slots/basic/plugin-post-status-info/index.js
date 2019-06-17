const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;


const PluginPostStatusInfoTest = () => {
	return(
		<PluginPostStatusInfo>
			<p>Content Here</p>
		</PluginPostStatusInfo>
	)
};

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );
