const { createSlotFill } = wp.components;

const { Fill: BasicCreateSlotFill, Slot } = createSlotFill( 'BasicCreateSlotFill' );
BasicCreateSlotFill.Slot = Slot;

/**
 * First Example

const { Fill, Slot } = createSlotFill( 'BasicCreateSlotFill' );
const BasicCreateSlotFill = ( { children } ) => (
	<Fill>
		{ children }
	</Fill>
);

BasicCreateSlotFill.Slot = Slot;
*/


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
export default BasicCreateSlotFill;
