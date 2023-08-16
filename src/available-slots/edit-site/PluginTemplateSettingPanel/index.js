/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginTemplateSettingPanel } from '@wordpress/edit-site';
import { registerPlugin } from '@wordpress/plugins';
import { PanelBody } from '@wordpress/components';
/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-site-plugin-template-setting-panel', {
	render: () => (
		<PluginTemplateSettingPanel>
			<PanelBody>
				{ __(
					'Site Editor Example: PluginTemplateSettingPanel',
					'gutenberg-slot-fill-system'
				) }
			</PanelBody>
		</PluginTemplateSettingPanel>
	),
	icon: Avocado,
} );
