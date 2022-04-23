/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

const EditPostPluginSidebarExample = () => (
	<PluginSidebar
		name="edit-post-plugin-sidebar-example"
		title={__(
			'Post Editor Example: PluginSidebar',
			'gutenberg-slot-fill-system'
		)}
		icon={Avocado}
	>
		<PanelBody>
			<p>
				{__(
					'View the code in the src/edit-post/PluginSidebar/index.js file',
					'gutenberg-slot-fill-system'
				)}
			</p>
		</PanelBody>
	</PluginSidebar>
);
export default EditPostPluginSidebarExample;
