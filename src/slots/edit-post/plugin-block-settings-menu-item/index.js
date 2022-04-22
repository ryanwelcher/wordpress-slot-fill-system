/*global alert*/
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';

const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={['core/paragraph']}
		label="PluginBlockSettingsMenuItem Text"
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert('clicked');
		}}
	/>
);

export default PluginBlockSettingsMenuGroupDemo;
