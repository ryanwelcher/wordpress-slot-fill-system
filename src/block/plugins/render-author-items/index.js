/**
 * Register our plugin
 */
const RenderAuthorItems = () => (
	<PostInfoAuthor>
		{ ( props ) => (
			<>
				<ToggleControl
					label={ __( 'Show Post Author' ) }
					onChange={ ( val ) => props.setAttributes( { showAuthor: val } ) }
					checked={ props.attributes.showAuthor }
				/>
				<ToggleControl
					label={ __( 'Show Post Bio' ) }
					onChange={ ( val ) => props.setAttributes( { showBio: val } ) }
					checked={ props.attributes.showBio }
				/>
			</>
		) }
	</PostInfoAuthor>
);

registerPlugin( 'extending-gutenberg-author-items', { render: RenderAuthorItems } );
