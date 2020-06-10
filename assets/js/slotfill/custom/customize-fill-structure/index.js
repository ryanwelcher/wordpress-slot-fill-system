const { createSlotFill, PanelBody } = wp.components;

const { Fill, Slot } = createSlotFill( 'CustomizeFillStructure' );

const CustomizeFillStructure = ( { children } ) => (
	<Fill>
		<PanelBody>
			{ children }
		</PanelBody>
	</Fill>
);
CustomizeFillStructure.Slot = Slot;
export default CustomizeFillStructure;
