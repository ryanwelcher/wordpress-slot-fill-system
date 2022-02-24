import { PluginPostPublishPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

const PluginPostPublishPanelDemo = () => (
	<PluginPostPublishPanel
		className="custom-panel-class"
		title="My Custom Panel"
		initialOpen
	>
		<p>{__('Post Publish Panel', 'slot-fill-system')}</p>
	</PluginPostPublishPanel>
);
export default PluginPostPublishPanelDemo;
