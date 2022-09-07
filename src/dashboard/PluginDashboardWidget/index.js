/**
 * WordPress dependencies
 */
import { createSlotFill, Icon } from '@wordpress/components';
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );
import { compose } from '@wordpress/compose';
import { withPluginContext } from '@wordpress/plugins';

// Define the structure of the Fill.
const PluginDashboardWidgetFill = ( { children, icon } ) => {
	return (
		<Fill>
			<section>
				<div>{ children }</div>
			</section>
		</Fill>
	);
};

// We're using compose here to allow the SlotFill to use an icon prop or inherit it from the registerPlugin settings.
const PluginDashboardWidget = compose(
	withPluginContext( ( context, ownProps ) => {
		return {
			icon: ownProps.icon || context.icon,
		};
	} )
)( PluginDashboardWidgetFill );

// Define the Slot portion
PluginDashboardWidget.Slot = Slot;

// Export the finished SlotFill
export default PluginDashboardWidget;
