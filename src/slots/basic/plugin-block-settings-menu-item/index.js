const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlockNames='core/paragraph'
		label='PluginBlockSettingsMenuItem'
		onClick={ () => { alert( 'clicked' ) } } />
);

export default PluginBlockSettingsMenuGroupDemo;
//registerPlugin( 'block-settings-menu-group-demo', { render: PluginBlockSettingsMenuGroupDemo } );
