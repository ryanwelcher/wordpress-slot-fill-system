const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;


const PluginPostStatusInfoDemo = () => (
	<PluginPostStatusInfo className='my-custom-classname'>
		<p>Post Status Info SlotFill</p>
	</PluginPostStatusInfo>
);

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoDemo } );
