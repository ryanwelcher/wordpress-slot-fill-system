import {
	createSlotFill,
	Icon,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
const { Fill, Slot } = createSlotFill( 'PluginDashboardWidget' );
import { compose } from '@wordpress/compose';
import { withPluginContext } from '@wordpress/plugins';

const PluginDashboardWidgetFill = ( { children, icon } ) => {
	return (
		<Fill>
			<p
				style={ {
					display: 'flex',
				} }
			>
				<Icon icon={ icon } />
				This widget serves no purpose, enjoy!
			</p>
			{ children }
		</Fill>
	);
};

const PluginDashboardWidget = compose(
	withPluginContext( ( context, ownProps ) => {
		return {
			icon: ownProps.icon || context.icon,
		};
	} )
)( PluginDashboardWidgetFill );

// PluginDashboardWidget.Slot = Slot;
PluginDashboardWidget.Slot = ( data ) => {
	return (
		<Slot>
			{ ( fills ) => {
				return fills.length ? fills : null;
			} }
		</Slot>
	);
};

export default PluginDashboardWidget;
