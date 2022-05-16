/**
 * WordPress dependencies
 */
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { Avocado } from '../../../svg/icons';

registerPlugin( 'example-edit-post-plugin-sidebar', {
	render: () => (
		<PluginSidebar
			name="edit-post-plugin-sidebar-example"
			title="Post Editor Example: PluginSidebar"
			icon={ Avocado }
		>
			<PanelBody>
				<p>Plugin content goes here</p>
			</PanelBody>
		</PluginSidebar>
	),
	icon: Avocado,
} );
