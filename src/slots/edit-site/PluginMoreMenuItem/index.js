/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginMoreMenuItem } from '@wordpress/edit-site';

const SiteEditorPluginMoreMenuItemExample = () => (
	<PluginMoreMenuItem
		href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
		target="_blank"
		rel="noopener noreferrer"
	>
		{__('SlotFill Reference Guide', 'gutenberg-slot-fill-system')}
	</PluginMoreMenuItem>
);

export default SiteEditorPluginMoreMenuItemExample;
