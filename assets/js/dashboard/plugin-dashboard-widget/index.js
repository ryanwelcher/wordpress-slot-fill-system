const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );

const PluginDashboardWidget = ( { children } ) => (
	<Fill>
		{ children }
	</Fill>
);
PluginDashboardWidget.Slot = Slot;

export default PluginDashboardWidget;
