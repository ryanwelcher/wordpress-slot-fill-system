import { createSlotFill } from '@wordpress/components';

/**
 * createSlotFill creates and returns a named Slot and Fill component.
 */
const { Fill, Slot } = createSlotFill( 'BasicCreateSlotFill' );

const BasicCreateSlotFill = ( { children } ) => {
	return <Fill>{ children }</Fill>;
};

BasicCreateSlotFill.Slot = Slot;

/**
 * Streamlined

  const { Fill: BasicCreateSlotFill, Slot } = createSlotFill( 'BasicCreateSlotFill' );
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
