/**
 * Get registerPlugin.
 */
import { registerPlugin } from '@wordpress/plugins';
import { Fragment } from '@wordpress/element';

/**
 * Import our components that contain the SlotFills
 */
import { Avocado } from '../../svg/icons';
import PluginBlockSettingsMenuGroupDemo from './plugin-block-settings-menu-item';
import MyDocumentSettingDemo from './plugin-document-setting-panel';
import MyButtonMoreMenuItemDemo from './plugin-more-menu-item';
import PluginPostPublishPanelDemo from './plugin-post-publish-panel';
import PluginPostStatusInfoDemo from './plugin-post-status-info';
import PluginPrePublishPanelDemo from './plugin-pre-publish-panel';
import PluginSidebarMoreMenuItemDemo from './plugin-sidebar-more-menu-item';

/**
 * One plugin to rule them all.
 *
 * @param  props
 */
const CombinedSlotFillsDemo = () => {
	return (
		<Fragment>
			<PluginBlockSettingsMenuGroupDemo />
			<MyDocumentSettingDemo />
			<MyButtonMoreMenuItemDemo />
			<PluginPrePublishPanelDemo />
			<PluginPostPublishPanelDemo />
			<PluginPostStatusInfoDemo />
			<PluginSidebarMoreMenuItemDemo />
		</Fragment>
	);
};

/**
 * register the plugin.
 */
registerPlugin('extending-gutenberg', {
	render: CombinedSlotFillsDemo,
	icon: Avocado,
});
