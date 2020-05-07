const { PanelBody, createSlotFill } = wp.components;
const { __ } = wp.i18n;

const { Fill, Slot } = createSlotFill( 'PostInfoAuthor' );
// Alternate way
//const { Fill: PostInfoAuthor, Slot } = createSlotFill( 'PostInfoAuthor' );

const PostInfoAuthor = ( { children } ) => (
	<Fill>
		{ children }
	</Fill>
);

PostInfoAuthor.Slot = ( { fillProps } ) => (
	<Slot fillProps={ fillProps } >
		{ ( fills ) => (
			<PanelBody title={ __( 'Post Author' ) }>
				{ fills }
			</PanelBody>
		) }
	</Slot>
);

export default PostInfoAuthor;
