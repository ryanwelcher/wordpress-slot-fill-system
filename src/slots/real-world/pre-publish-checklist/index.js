const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel } = wp.editPost;
const { select, dispatch } = wp.data;
const { __ } = wp.i18n;

import withWordCounter from '../../../utils/withWordCounter';

const PrePublishCheckList = () => {
	let lockPost = false;

	// Get the WordCount
	const wordCounter = withWordCounter({});
	let wordCountMessage = `${wordCounter.count}`;
	if ( ! wordCounter.passed ) {
		lockPost = true;
		wordCountMessage  = __( ' Minimum of 1000 words required.' );
	}

	// Get the cats
	const cats = select( 'core/editor' ).getEditedPostAttribute( 'categories' );
	let catsMessage = __( 'Set' );
	if ( ! cats.length ) {
		lockPost = true;
		catsMessage = __( 'Missing' );
	} else {
		// Check that the cat is not uncategorized - this assumes that the ID of Uncategorized is 1, which it would be for most installs.
		if ( cats.length === 1 && cats[0] === 1 ) {
			lockPost = true;
			catsMessage = __( 'Cannot use Uncategorized as the category' );
		}
	}

	// Get the tags
	const tags = select( 'core/editor' ).getEditedPostAttribute( 'tags' );
	let tagsMessage = __( 'Set' );
	if ( tags.length < 3) {
		lockPost = true;
		tagsMessage = __( 'Minimum of 3 tags are required' );
	}

	// Get the featured image
	const featuredImageID = select( 'core/editor' ).getEditedPostAttribute( 'featured_media' );
	let featuredImage = 'Set';

	if ( featuredImageID === 0 ) {
		lockPost = true;
		featuredImage = 'Not Set';
	}

	// Do we need to lock the post?
	if ( lockPost === true ) {
		dispatch( 'core/editor' ).lockPostSaving();
	} else {
		dispatch( 'core/editor' ).unlockPostSaving();
	}
	return (
		<PluginPrePublishPanel
			title={ 'Publish Checklist' }
			initialOpen={ true }
		>
			<p><b>{ __( 'WordCount:') }</b> { wordCountMessage }</p>
			<p><b>{ __( 'Categories:') }</b> { catsMessage }</p>
			<p><b>{ __( 'Tags:') }</b> { tagsMessage }</p>
			<p><b>{ __( 'Featured Image:') }</b> { featuredImage }</p>
		</PluginPrePublishPanel>
	)
};

registerPlugin( 'extending-gutenberg-pre-publish-checklist', { render: PrePublishCheckList } );
