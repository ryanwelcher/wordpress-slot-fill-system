import { createSlotFill } from '@wordpress/components';

const { Fill: CustomizeSlotStructure, Slot } = createSlotFill(
	'CustomizeSlotStructure'
);

CustomizeSlotStructure.Slot = () => (
	<Slot>
		{ ( fills ) => {
			return fills.length ? <code>{ fills }</code> : null;
		} }
	</Slot>
);

export default CustomizeSlotStructure;
