//
// import './PluginPostStatusInfo';

/**
 * Get registerPlugin.
 */
import { registerPlugin } from '@wordpress/plugins';
import { Fragment } from '@wordpress/element';

/**
 * Import our components that contain the SlotFills
 */
import { Avocado } from '../../svg/icons';
import EditPostPluginSidebarExample from './PluginSidebar';
import EditPostPluginSidebarMoreMenuItemExample from './PluginSidebarMoreMenuItem';
import EditPostPluginPrePublishPanelExample from './PluginPrePublishPanel';

import PluginBlockSettingsMenuGroupDemo from './plugin-block-settings-menu-item';
import MyDocumentSettingDemo from './plugin-document-setting-panel';
import MyButtonMoreMenuItemDemo from './plugin-more-menu-item';
import PluginPostPublishPanelDemo from './plugin-post-publish-panel';
// import PluginPostStatusInfoDemo from './PluginPostStatusInfo';
import PluginPrePublishPanelDemo from './PluginPrePublishPanel';

/**
 * register the plugin.
 */
// registerPlugin('extending-gutenberg', {
// 	render: () => <EditPostPluginSidebarExample />,
// 	icon: Avocado,
// });

import './PluginSidebar';
