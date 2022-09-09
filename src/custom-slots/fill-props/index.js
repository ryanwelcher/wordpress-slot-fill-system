import { createSlotFill } from '@wordpress/components';

/**
 * createSlotFill creates and returns a named Slot and Fill component.
 */
const { Fill, Slot } = createSlotFill( 'SlotFillProps' );

const SlotFillProps = ( { children } ) => <Fill>{ children }</Fill>;

SlotFillProps.Slot = Slot;

export default SlotFillProps;
