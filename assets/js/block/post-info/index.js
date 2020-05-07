const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;

import { TenUp } from '../../svg/icons';

import PostInfoAuthor from '../slots/post-info-author';
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
			default: true,
		},
		showBio: {
			type: 'boolean',
			default: false,
		},
	},
	edit: ( props ) => {
		return (
			<>
				Post Information Block
				<InspectorControls>
					<PostInfoAuthor.Slot fillProps={ props } />
					<PostInfoOpen.Slot />
				</InspectorControls>
			</>
		);
	},

	save: ( props ) => {
		return null;
	},
} );
