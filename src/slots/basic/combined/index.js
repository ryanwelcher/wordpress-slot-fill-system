/**
 * Get registerPlugin.
 */
const { registerPlugin } = wp.plugins;

/**
 * Import our components that contain the SlotFills
 */
import { TenUp } from '../../../svg/icons';
import PluginBlockSettingsMenuGroupDemo from '../plugin-block-settings-menu-item';
import MyDocumentSettingDemo from '../plugin-document-setting';
import MyButtonMoreMenuItemDemo from '../plugin-more-menu-item';
import PluginPostPublishPanelDemo from '../plugin-post-publish-panel';
import PluginPostStatusInfoDemo from '../plugin-post-status-info';
import PluginPrePublishPanelDemo from '../plugin-pre-publish-panel';
import PluginSidebarDemo from '../plugin-sidebar';
import PluginSidebarMoreMenuItemDemo from '../plugin-sidebar-more-menu-item';

/**
 * One plugin to rule them all.
 */
const CombinedSlotFillsDemo = () => (
	<>
		<PluginBlockSettingsMenuGroupDemo />
		<MyDocumentSettingDemo />
		<MyButtonMoreMenuItemDemo />
		<PluginPrePublishPanelDemo />
		<PluginPostPublishPanelDemo />
		<PluginPostStatusInfoDemo />
		<PluginSidebarDemo />
		<PluginSidebarMoreMenuItemDemo />
	</>
);

/**
 * register the plugin.
 */
registerPlugin( 'extending-gutenberg', { render: CombinedSlotFillsDemo, icon: TenUp } );
