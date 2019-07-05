const { PanelBody, createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PostInfoAlt' );

const PostInfoAlt = ( { children, title } ) => {

	console.log( arguments );
	return (
		<Fill>
			<PanelBody
				title={ title }
			>
				{ children }
			</PanelBody>
		</Fill>
	);
};
PostInfoAlt.Slot = Slot;

export default PostInfoAlt;
