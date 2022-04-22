import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

const PluginPostStatusInfoDemo = () => (
	<PluginPostStatusInfo className="my-custom-class-name">
		<p>{__('Post Status Info SlotFill', 'slot-fill-system')}</p>
	</PluginPostStatusInfo>
);
export default PluginPostStatusInfoDemo;
