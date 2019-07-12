const { render } = wp.element;
const { SlotFillProvider } = wp.components;
const { registerPlugin, PluginArea } = wp.plugins;

import CologneChart from './cologne-chart';
import BeardedWonder from './joey-blake';

import PluginDashboardWidget from './plugin-dashboard-widget';

const DashboardWidget = () => {
	return(
		<SlotFillProvider>
			<p>This widget provides no value, I hope you enjoy it!</p>
			<PluginDashboardWidget.Slot/>
			<PluginArea />
		</SlotFillProvider>
	);
};

registerPlugin(
	'rediculous-widget',
	{
		render: () => (
			<>
				<PluginDashboardWidget>
					<CologneChart />
				</PluginDashboardWidget>
				<PluginDashboardWidget>
					<BeardedWonder />
				</PluginDashboardWidget>
			</>
		)
	}
);

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);
