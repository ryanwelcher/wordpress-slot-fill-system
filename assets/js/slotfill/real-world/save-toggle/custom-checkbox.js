const { CheckboxControl } = wp.components;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
export function MyCustomCheckbox( { isChecked = false, onUpdateCheckbox } ) {
	return (
		<CheckboxControl
			label="Is author"
			checked={ isChecked }
			onChange={ () => {
				onUpdateCheckbox( ! isChecked );
			} }
		/>
	);
}

export default compose( [
	withSelect( function( select ) {
		const { myKey } = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		return {
			isChecked: myKey,
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			onUpdateCheckbox( isChecked ) {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						myKey: isChecked,
					},
				} );
			},
		};
	} ),
] )( MyCustomCheckbox );

