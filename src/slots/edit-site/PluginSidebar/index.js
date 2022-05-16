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
registerPlugin( 'example-edit-site-plugin-sidebar', {
	render: () => (
		<PluginSidebar
			name="plugin-sidebar-test"
			title={ __(
				'Site Editor Example: PluginSidebar',
				'gutenberg-slot-fill-system'
			) }
		>
			<PanelBody>
				<p>
					{ __(
						'View the code in the src/edit-site/PluginSidebar/index.js file',
						'gutenberg-slot-fill-system'
					) }
				</p>
			</PanelBody>
		</PluginSidebar>
	),
	icon: Avocado,
} );
