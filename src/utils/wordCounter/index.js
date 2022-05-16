const { count } = wp.wordcount;
const { serialize } = wp.blocks;
const { withSelect } = wp.data;
const { compose } = wp.compose;

/**
 * Display the count with a label.
 *
 * @param {Object} params         Props for the component.
 * @param {string} [params.label] The label to display.
 * @param {int}    [params.count] The current count.
 */
const WordCounter = ( { label = 'Word Count', count } ) => {
	if ( false === count ) {
		return null;
	}

	return (
		<>
			<span>{ label }</span>
			<div>{ count }</div>
		</>
	);
};

const allowedCountTypes = [
	'words',
	'characters_excluding_spaces',
	'characters_including_spaces',
];

export default compose(
	withSelect( ( select, ownProps ) => {
		const countType = ownProps.countType || 'words';
		let counted = false;
		if ( allowedCountTypes.includes( countType ) ) {
			counted = count(
				serialize( select( 'core/editor' ).getBlocks() ),
				countType
			);
		}
		return { count: counted };
	} )
)( WordCounter );
