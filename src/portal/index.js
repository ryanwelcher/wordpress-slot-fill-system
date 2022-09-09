// https://twitter.com/Mamaduka/status/1519346490459701249

/**
 * WordPress dependencies
 */
import { createPortal, useEffect, useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { Button } from '@wordpress/components';

function MyToolbarButton() {
	// Lazy and one time initializations, also gives us a stable reference.
	const [ container ] = useState( () => {
		const element = document.createElement( 'div' );
		element.classList.add( 'smiley-container' );
		return element;
	} );

	// Add the container to the toolbar on component mount.
	useEffect( () => {
		const editorToolbar = document.querySelector(
			'.edit-post-header__toolbar'
		);

		editorToolbar?.appendChild( container );
		return () => {
			editorToolbar?.removeChild( container );
		};
	}, [] );

	return createPortal( <Button icon="smiley"></Button>, container );
}

// Register Block Editor plugin
// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/
registerPlugin( 'toolbar-portal-example', {
	render: MyToolbarButton,
} );
