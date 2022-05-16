/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginPrePublishPanel } from '@wordpress/edit-post';

const EditPostPluginPrePublishPanelExample = () => (
	<PluginPrePublishPanel
		className="custom-panel-class"
		initialOpen
		title={ __( 'My Custom Panel', 'gutenberg-slot-fill-system' ) }
	>
		<p>{ __( 'Pre Publish Panel', 'gutenberg-slot-fill-system' ) }</p>
	</PluginPrePublishPanel>
);
export default EditPostPluginPrePublishPanelExample;
