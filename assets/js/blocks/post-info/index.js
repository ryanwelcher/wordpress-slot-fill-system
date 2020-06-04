import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { TenUp } from '../../svg/icons';

import attributes from './attributes';
/**
 * Register a block that shows Post Information.
 */
registerBlockType( 'extending-gutenberg/post-info', {
	title: __( 'Post Information' ),
	description: __( 'This block displays information about the post such as author information' ),
	category: 'common',
	attributes,
	icon: TenUp,
	edit: () => {
		return <p>Post Information Block</p>;
	},
	save: () => {
		return <div>Test</div>;
	},
} );
