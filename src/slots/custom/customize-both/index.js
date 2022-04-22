const { createSlotFill, PanelBody } = wp.components;

const { Fill, Slot } = createSlotFill( 'CustomizeBoth' );

const CustomizeBoth = ( { children } ) => (
	<Fill>
		<li>
			{ children }
		</li>
	</Fill>
)

CustomizeBoth.Slot = () => (
	<Slot>
		{ ( fills ) => {
			return fills.length ? <PanelBody title="My List"><ul style={ { listStyle: 'initial' } }>{fills}</ul></PanelBody>: null;
		}}
	</Slot>
);
export default CustomizeBoth;
