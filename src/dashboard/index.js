import { render } from '@wordpress/element';
import { SlotFillProvider } from '@wordpress/components';
import { registerPlugin, PluginArea } from '@wordpress/plugins';
// Import the SlotFill
import PluginDashboardWidget from './plugin-dashboard-widget';
// Import some useless things to display
import BeardedWonder from './BeardedWonder';

/**
 * Internal dependencies
 */
import { Avocado } from '../svg/icons';

const DashboardWidget = () => {
	return (
		<SlotFillProvider>
			<PluginDashboardWidget.Slot />
			<PluginArea />
		</SlotFillProvider>
	);
};

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);

// register our plugin
registerPlugin( 'ridiculous-widget', {
	render: () => (
		<PluginDashboardWidget>
			<BeardedWonder />
		</PluginDashboardWidget>
	),
	icon: Avocado,
} );
