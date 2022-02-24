import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

const MyButtonMoreMenuItemDemo = () => (
	<PluginMoreMenuItem
		href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
		target="_blank"
		rel="noopener noreferrer"
	>
		{__('SlotFill Reference Guide', 'slot-fill-system')}
	</PluginMoreMenuItem>
);

export default MyButtonMoreMenuItemDemo;
