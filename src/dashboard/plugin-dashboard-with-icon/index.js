import { createSlotFill, Icon } from '@wordpress/components';
const { Fill, Slot } = createSlotFill('PluginDashboardIconWidget');
const { compose } = wp.compose;
const { withPluginContext } = wp.plugins;

const PluginDashboardIconWidgetFill = ({ children, icon, title }) => (
	<Fill>
		<Icon icon={icon} />
		{children}
	</Fill>
);

const PluginDashboardIconWidget = compose(
	withPluginContext((context, ownProps) => {
		return {
			icon: ownProps.icon || context.icon,
		};
	})
)(PluginDashboardIconWidgetFill);

PluginDashboardIconWidget.Slot = Slot;

export default PluginDashboardIconWidget;
