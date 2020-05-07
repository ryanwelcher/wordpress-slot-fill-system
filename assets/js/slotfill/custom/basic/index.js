const { Fill, Slot } = wp.components;
const { registerPlugin } = wp.plugins;

// This Component is used somewhere in our App.
const BasicSlot = () => (
	<Slot name="BasicSlot" />
);

const BasicFill = () => (
	<Fill name="BasicSlot">
		This text will appear wherever the Slot named "BasicSlot" is rendered.
	</Fill>
);
registerPlugin( 'raw-slot-fill', { render: BasicFill } );
