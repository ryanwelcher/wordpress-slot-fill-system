import { render } from '@wordpress/element';
import { SlotFillProvider } from '@wordpress/components';
import { registerPlugin, PluginArea } from '@wordpress/plugins';
// Import the SlotFill
import PluginDashboardWidget from './plugin-dashboard-widget';
// Import some useless things to display
import CologneChart from './cologne-chart';
import BeardyMcBeardFace from './beardy-mcbeardface';

const DashboardWidget = () => {
	return (
		<SlotFillProvider>
			<p>This widget provides no value, I hope you enjoy it!</p>
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
registerPlugin(
	'rediculous-widget',
	{
		render: () => (
			<PluginDashboardWidget>
				<CologneChart />
				<BeardyMcBeardFace />
			</PluginDashboardWidget>
		),
	}
);
