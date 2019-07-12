const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ ['core/paragraph'] }
		label='PluginBlockSettingsMenuItem Text'
		onClick={ () => { alert( 'clicked' ) } } />
);

export default PluginBlockSettingsMenuGroupDemo;

