import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

registerBlockType( 'myguten/meta-block', {
	title: 'Meta Block',
	icon: 'smiley',
	category: 'common',

	attributes: {
		blockValue: {
			type: 'string',
			source: 'meta',
			meta: 'myguten_meta_block_field',
			default: 'test',
		},
	},

	edit( { className, setAttributes, attributes } ) {
		function updateBlockValue( blockValue ) {
			setAttributes( { blockValue } );
		}

		return (
			<div className={ className }>
				<TextControl
					label="Meta Block Field"
					value={ attributes.blockValue }
					onChange={ updateBlockValue }
				/>
			</div>
		);
	},

	// No information saved to the block
	// Data is saved to post meta via attributes
	save() {
		return null;
	},
} );
