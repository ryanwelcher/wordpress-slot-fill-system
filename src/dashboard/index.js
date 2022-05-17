/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';
import { SlotFillProvider } from '@wordpress/components';
import { registerPlugin, PluginArea } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import PluginDashboardWidget from './PluginDashboardWidget';
import { Avocado } from '../svg/icons';
import BeardedWonder from './BeardedWonder';

/**
 * Create the component that will be rendered into the Dashboard widget.
 *
 * Notice that the PluginArea component has been scoped to "dashboard".
 * Plugins MUST indicate the same scope to be rendered.
 *
 */
const DashboardWidget = () => (
	<SlotFillProvider>
		<h4>
			{ __(
				'This widget serves no purpose, please enjoy!',
				'gutenberg-slot-fill-system'
			) }
		</h4>

		{ /* Exposing the Slot of our custom SlotFill. */ }
		<PluginDashboardWidget.Slot />

		{ /* This can be rendered anywhere inside the SlotFillProvider, it's not visible. */ }
		<PluginArea scope="dashboard" />
	</SlotFillProvider>
);

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);

// Register a custom plugin that targets the dashboard widget.
// This can be in a separate file as well, as long as it's enqueued on the Dashboard page.
registerPlugin( 'example-custom-dashboard-widget', {
	render: () => (
		<PluginDashboardWidget>
			<BeardedWonder />
		</PluginDashboardWidget>
	),
	icon: Avocado,
	scope: 'dashboard', // This scope matches the scope defined in PluginArea.
} );
