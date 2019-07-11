const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );

const PluginDashboardWidget = ( { children } ) => (
	<Fill>
		<p>{children}</p>
	</Fill>
);
PluginDashboardWidget.Slot = Slot;

export default PluginDashboardWidget;
