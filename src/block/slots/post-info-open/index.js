const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PostInfoOpen' );

const PostInfoOpen = ( { children} ) => (
	<Fill>
		{ children }
	</Fill>
);
PostInfoOpen.Slot = Slot;

export default PostInfoOpen;
