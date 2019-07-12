const { render } = wp.element;
const { SlotFillProvider } = wp.components;
const { registerPlugin, PluginArea } = wp.plugins;
// Import the SlotFill
import PluginDashboardWidget from './plugin-dashboard-widget';
// Import some useless things to display
import CologneChart from './cologne-chart';
import BeardedWonder from './joey-blake';

const DashboardWidget = () => {
	return(
		<SlotFillProvider>
			<p>This widget provides no value, I hope you enjoy it!</p>
			<PluginDashboardWidget.Slot/>
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
				<BeardedWonder />
			</PluginDashboardWidget>
		)
	}
);
