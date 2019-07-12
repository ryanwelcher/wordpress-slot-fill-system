const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;

import { TenUp } from '../../svg/icons';

import PostInfoAuthor  from '../slots/post-info-author';
import PostInfoOpen from '../slots/post-info-open';

// Import our registerPlugin call - this needs to be here to work...
import '../plugins';

/**
 * Register a block that shows Post Information.
 */
registerBlockType( 'extending-gutenberg/post-info', {
	title: __( 'Post Information' ),
	description: __( 'This block displays information about the post such as author information' ),
	icon: TenUp,
	category: 'common',
	attributes: {
		showAuthor: {
			type: 'boolean',
			default: true
		},
		showBio: {
			type: 'boolean',
			default: false
		}
	},
	edit: props => {
		return (
			<>
				Post Information Block
				<InspectorControls>
					<PostInfoAuthor.Slot fillProps={ props } />
					<PostInfoOpen.Slot />
				</InspectorControls>
			</>
		)
	},

	save: props => {
		return null;
	}
} );
<<<<<<< HEAD


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

const RenderOpenItems = () => (
	<PostInfoOpen>
		<PanelBody title={ __( 'Information' ) }>
			<p>{ __( 'Information you need to know' ) }</p>
		</PanelBody>
	</PostInfoOpen>
);

registerPlugin( 'extending-gutenberg-open-items', { render: RenderOpenItems } );
=======
>>>>>>> master
