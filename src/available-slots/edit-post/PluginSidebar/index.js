/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-sidebar', {
	render: () => (
		<PluginSidebar
			name="edit-post-plugin-sidebar-example"
			title={ __(
				'Post Editor Example: PluginSidebar',
				'gutenberg-slot-fill-system'
			) }
			icon={ Avocado }
		>
			<PanelBody>
				<p>
					{ __(
						'Plugin content goes here',
						'gutenberg-slot-fill-system'
					) }
				</p>
			</PanelBody>
		</PluginSidebar>
	),
	icon: Avocado,
} );
