const { render } = wp.element;
const { PanelBody, createSlotFill, SlotFillProvider } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );

const PluginDashboardWidget = ( { children} ) => (
	<Fill><h2>{children}</h2></Fill>
);
PluginDashboardWidget.Slot = Slot;

const fills = [];

const FillsRenderer = ( fills ) => {
	console.log( fills );
};



const DashboardWidget = () => {
	return(
		<SlotFillProvider>
			React
			<PluginDashboardWidget.Slot/>
			<FillsRenderer />
			<div style={ { display: 'none' } }>
				<PluginDashboardWidget>
					This should appear above
				</PluginDashboardWidget>
			</div>
		</SlotFillProvider>
	);
};

render(
	<DashboardWidget />,
	document.querySelector( '#extending-gutenberg-dashboard' )
);
