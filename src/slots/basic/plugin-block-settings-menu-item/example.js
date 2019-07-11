/**
 * PluginBlockSettingsMenuItem Example
 */
const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ ['core/paragraph'] }
		label='PluginBlockSettingsMenuItem'
		onClick={ () => { alert( 'clicked' ) } }
	/>
);

registerPlugin( 'block-settings-menu-group-demo', { render: PluginBlockSettingsMenuGroupDemo } );
