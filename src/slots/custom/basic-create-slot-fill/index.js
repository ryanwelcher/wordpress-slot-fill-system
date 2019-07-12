const { createSlotFill } = wp.components;

const { Fill: BasicCreateSlotFill, Slot } = createSlotFill( 'BasicCreateSlotFill' );

BasicCreateSlotFill.Slot = Slot;
export default BasicCreateSlotFill;

/**

const BasicCreateSlotFill = ( { children } ) => (
	<Fill>
		{ children }
	</Fill>
);

BasicCreateSlotFill.Slot = ( { children }  ) => {
	<Slot>
		{ children }
	</Slot>
}

*/
