const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ ['core/paragraph'] }
		label='PluginBlockSettingsMenuItem'
		onClick={ () => { alert( 'clicked' ) } } />
);

export default PluginBlockSettingsMenuGroupDemo;

