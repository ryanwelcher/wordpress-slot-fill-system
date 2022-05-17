const { createSlotFill } = wp.components;

const { Fill, Slot } = createSlotFill( 'CustomizeBoth' );

const CustomizeBoth = ( { children } ) => (
	<Fill>
		<li>{ children }</li>
	</Fill>
);

CustomizeBoth.Slot = () => (
	<Slot>
		{ ( fills ) => {
			return fills.length ? (
				<ul style={ { listStyle: 'initial', marginLeft: '5px' } }>
					{ fills }
				</ul>
			) : null;
		} }
	</Slot>
);
export default CustomizeBoth;
