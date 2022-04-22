import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

const MyDocumentSettingDemo = () => (
	<PluginDocumentSettingPanel
		name="custom-panel"
		title="Custom Panel"
		className="custom-panel"
	>
		{__('Custom Panel Contents', 'slot-fill-system')}
	</PluginDocumentSettingPanel>
);

export default MyDocumentSettingDemo;
