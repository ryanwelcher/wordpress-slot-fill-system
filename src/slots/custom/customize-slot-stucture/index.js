const { createSlotFill, PanelBody } = wp.components;

const { Fill:CustomizeSlotStructure , Slot } = createSlotFill( 'CustomizeSlotStructure' );

CustomizeSlotStructure.Slot = () => (
	<Slot>
		{ ( fills ) => {
			return fills.length ? <PanelBody>{fills}</PanelBody>: null;
		}}
	</Slot>
);

export default CustomizeSlotStructure;
