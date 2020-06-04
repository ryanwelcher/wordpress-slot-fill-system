const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ [ 'core/paragraph' ] }
		label="PluginBlockSettingsMenuItem Text"
		onClick={ () => {
			global.alert( 'clicked' );
		} } />
);

export default PluginBlockSettingsMenuGroupDemo;

