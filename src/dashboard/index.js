const { render } = wp.element;
const { SlotFillProvider } = wp.components;
const { registerPlugin, PluginArea } = wp.plugins;
import { Chart } from "react-google-charts";

import PluginDashboardWidget from './plugin-dashboard-widget';
import PluginDashboardIconWidget from './plugin-dashboard-with-icon';
const pieOptions = {
	title: "Colors I Like",
	pieHole: 0.6,
	slices: [
		{
			color: "#96202A"
		},
		{
			color: "#2B2B2B"
		},
		{
			color: "#96202A"
		},
		{
			color: "#96202A"
		}
	],
	legend: {
		position: "bottom",
		alignment: "center",
		textStyle: {
			color: "233238",
			fontSize: 14
		}
	},
	tooltip: {
		showColorCode: true
	},
	chartArea: {
		left: 0,
		top: "10px",
		width: "100%",
		height: "80%"
	}
};

const DashboardWidget = () => {
	return(
		<SlotFillProvider>
			<h2>Custom SlotFill System</h2>
			<PluginDashboardWidget.Slot/>
			<p>This is a custom SlotFill implementation</p>
			<Chart
				chartType="PieChart"
				data={[["Age", "Weight"], ["Red", 12], ["Blue", 5.5]]}
				options={pieOptions}
				graph_id="PieChart"
				width={"100%"}
				height={"300px"}
				legend_toggle
			/>
			<PluginDashboardIconWidget.Slot />
			<PluginArea />
		</SlotFillProvider>
	);
};

registerPlugin(
	'test-name',
	{
		render: () => (
		<>
			<PluginDashboardIconWidget>
				I have an icon!
			</PluginDashboardIconWidget>
			<PluginDashboardWidget>
				This will appear just below the title.
			</PluginDashboardWidget>
		</>
		)
	}
);

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);
