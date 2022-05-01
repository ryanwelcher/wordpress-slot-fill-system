/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

registerPlugin('example-document-settings-panel', {
	render: () => (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title="Custom Panel"
			className="custom-panel"
		>
			{__('Custom Panel Contents', 'slot-fill-system')}
		</PluginDocumentSettingPanel>
	),
	icon: Avocado,
});
