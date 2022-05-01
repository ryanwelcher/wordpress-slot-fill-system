/**
 * WordPress dependencies
 */
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { Avocado } from '../../../svg/icons';

registerPlugin('example-document-settings-panel', {
	render: () => (
		<PluginSidebar
			name="edit-post-plugin-sidebar-example"
			title="Post Editor Example: PluginSidebar"
			icon={Avocado}
		>
			<PanelBody>
				<p>Plugin content goes here</p>
			</PanelBody>
		</PluginSidebar>
	),
	icon: Avocado,
});
