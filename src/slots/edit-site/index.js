/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../svg/icons';
import SiteEditorMainDashboardButtonExample from './MainDashboardButton';
import SiteEditorPluginSidebarExample from './PluginSidebar';
import SiteEditorPluginMoreMenuItemExample from './PluginMoreMenuItem';

// Register the plugin containing all the slots available in the Site Editor
registerPlugin('gutenberg-slot-fill-system', {
	render: () => (
		<>
			<SiteEditorMainDashboardButtonExample />
			<SiteEditorPluginSidebarExample />
			<SiteEditorPluginMoreMenuItemExample />
		</>
	),
	icon: Avocado,
});
