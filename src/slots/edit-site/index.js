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
import MyDocumentSettingDemo from '../edit-post/plugin-document-setting-panel';

// Register the plugin containing all the slots available in the Site Editor
// registerPlugin('gutenberg-slot-fill-system', {
// 	render: () => (
// 		<>
// 			{/* <SiteEditorMainDashboardButtonExample /> */}
// 			{/* <SiteEditorPluginSidebarExample /> */}
// 			{/* <SiteEditorPluginMoreMenuItemExample /> */}
// 			{/* <MyDocumentSettingDemo /> */}
// 		</>
// 	),
// 	icon: Avocado,
// });
