/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/edit-site';
import { PanelBody } from '@wordpress/components';

const SiteEditorPluginSidebarExample = () => (
	<PluginSidebar
		name="plugin-sidebar-test"
		title={__(
			'Site Editor Example: PluginSidebar',
			'gutenberg-slot-fill-system'
		)}
	>
		<PanelBody>
			<p>
				{__(
					'View the code in the src/edit-site/PluginSidebar/index.js file'
				)}
			</p>
		</PanelBody>
	</PluginSidebar>
);

export default SiteEditorPluginSidebarExample;
