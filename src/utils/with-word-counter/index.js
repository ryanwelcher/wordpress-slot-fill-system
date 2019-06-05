const { Component} = wp.element;
const { count } = wp.wordcount;
const { serialize } = wp.blocks;
const { select } = wp.data;

/**
 *
 * @param {Object} params             Settings for this function
 * @param {int}    [params.minCount]  The minimum word count. If 0, no check is done.
 * @param {string} [params.countType] Passed to the count instance. Options 'words', 'characters_excluding_spaces', or 'characters_including_spaces'
 *
 * @returns {{count: int, passed: boolean}}
 */
const withWordCounter = ( { minCount = 500, countType = 'words' } ) => {
	const wordCount = count( serialize( select( 'core/editor' ).getBlocks() ), countType );
	if ( minCount > 0 && wordCount < minCount ) {
		return {
			passed: false,
			count: wordCount,
		}
	} else {
		return {
			passed: true,
			count: wordCount
		}
	}
};

export default withWordCounter;
