import { createSlotFill, Button } from '@wordpress/components';

const { Fill, Slot } = createSlotFill( 'CustomizeFillStructure' );

const CustomizeFillStructure = ( { children } ) => (
	<Fill>
		<Button variant="primary">{ children }</Button>
	</Fill>
);
CustomizeFillStructure.Slot = Slot;

export default CustomizeFillStructure;
