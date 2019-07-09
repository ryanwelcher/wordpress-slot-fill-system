const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlockNames='core/paragraph'
		icon='smiley'
		label='Menu Item Text'
		onClick={ () => { alert( 'clicked' ) } } />
);

registerPlugin( 'block-settings-menu-group-demo', { render: PluginBlockSettingsMenuGroupDemo } );
