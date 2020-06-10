const { createSlotFill, PanelBody } = wp.components;
const { compose } = wp.compose;
const { withPluginContext } = wp.plugins;

const { Fill, Slot } = createSlotFill( 'InheritIcon' );

const InheritIconFill = ( { children, icon } ) => (
	<Fill>
		<PanelBody
			title="Inherited Icon"
			icon={ icon }
		>
			{ children }
		</PanelBody>
	</Fill>
);

const InheritIcon = compose(
	withPluginContext( ( context, ownProps ) => {
		return {
			icon: ownProps.icon || context.icon,
		};
	} )
)( InheritIconFill );

InheritIcon.Slot = Slot;
export default InheritIcon;
