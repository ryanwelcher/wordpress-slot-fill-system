const { render } = wp.element;
const { PanelBody, createSlotFill, SlotFillProvider } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );
const { registerPlugin, PluginArea } = wp.plugins;

const PluginDashboardWidget = ( { children} ) => (
	<Fill><p>{children}</p></Fill>
);
PluginDashboardWidget.Slot = Slot;

const DashboardWidget = () => {
	return(
		<SlotFillProvider>
			<h2>Custom SlotFill System</h2>
			<PluginDashboardWidget.Slot/>
			<p>This is a custom SlotFill implementation</p>
			<PluginArea />
		</SlotFillProvider>
	);
};

registerPlugin(
	'test-name',
	{
	render: () => (
			<PluginDashboardWidget>
				This will appear just below the title 2
			</PluginDashboardWidget>
		)
	}
);

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);
