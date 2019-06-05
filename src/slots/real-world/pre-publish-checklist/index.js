const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel } = wp.editPost;
const { select, dispatch } = wp.data;
const { serialize } = wp.blocks;
const { PanelBody } = wp.components;

import withWordCounter from './with-word-counter';

const PrePublishCheckList = () => {
	let lockPost = false;

	// Get the WordCount
	const wordCounter = withWordCounter({});
	let wordCountMessage = `${wordCounter.count}`;
	if ( ! wordCounter.passed ) {
		lockPost = true;
		wordCountMessage += ` - Minimum of 1000 required.`;
	}

	// Get the cats
	const cats = select( 'core/editor' ).getEditedPostAttribute( 'categories' );
	let catsMessage = 'Set';
	if ( ! cats.length ) {
		lockPost = true;
		catsMessage = 'Missing';
	} else {
		// Check that the cat is not uncategorized - this assumes that the ID of Uncategorized is 1, which it would be for most installs.
		if ( cats.length === 1 && cats[0] === 1 ) {
			lockPost = true;
			console.log ( '3' );
			catsMessage = 'Cannot use Uncategorized';
		}
	}

	// Get the tags
	const tags = select( 'core/editor' ).getEditedPostAttribute( 'tags' );
	let tagsMessage = 'Set';
	if ( tags.length < 3 || tags.length < 5 ) {
		lockPost = true;
		tagsMessage = 'Required 3 - 5 tags';
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
		<PluginPrePublishPanel>
			<PanelBody title={ 'Publish Checklist' }>
				<p><b>WordCount:</b> { wordCountMessage }</p>
				<p><b>Categories:</b> { catsMessage }</p>
				<p><b>Tags:</b> { tagsMessage }</p>
				<p><b>Featured Image:</b> { featuredImage }</p>
			</PanelBody>
		</PluginPrePublishPanel>
	)
};

registerPlugin( 'pre-publish-checklist', { render: PrePublishCheckList } );
