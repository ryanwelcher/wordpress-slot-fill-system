/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */
import SettingsPage from './components/SettingsPage';

const App = ( ) => {
	const accountID = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getActivePage() );
	console.log( 'datastore', accountID );
	return (
		<SettingsPage title="Extending Gutenberg"></SettingsPage>
	);
};
// Initialize the app once the DOM is ready.
domReady( () => {
	const renderTarget = document.querySelector( '#extending-gutenberg-settings' );
	if ( renderTarget ) {
		render(
			<App />,
			document.querySelector( '#extending-gutenberg-settings' )
		);
	}
} );
