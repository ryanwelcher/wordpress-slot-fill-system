/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import SettingsPage from './components/settings-page';
import SettingsSection from './components/settings-section';
import { CheckBoxSetting } from './components/setting-types';

const App = ( ) => {
	const isLoading = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getLoadingStatus() );
	const settings = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getSettings() );
	const { updateSetting, getSettings } = useDispatch( 'extending-gutenberg/settings' );

	useEffect( () => {
		getSettings();
	}, [] );

	if ( isLoading ) {
		return (
			<SettingsPage title="Extending Gutenberg"><p>Loading</p></SettingsPage>
		);
	}
	const { blocksEnabled, slotFillEnabled, dashboardWidget } = settings;
	return (
		<SettingsPage title="Extending Gutenberg">
			<SettingsSection>
				<CheckBoxSetting
					label="Enable example blocks"
					id="blocksEnabled"
					isChecked={ blocksEnabled }
					dispatch={ updateSetting }
				/>
				<CheckBoxSetting
					label="Enable slotfill examples"
					id="slotFillEnabled"
					isChecked={ slotFillEnabled }
					dispatch={ updateSetting }
				/>
				<CheckBoxSetting
					label="Enable custom SlotFill Dashboard widget"
					id="dashboardWidget"
					isChecked={ dashboardWidget }
					dispatch={ updateSetting }
				/>
			</SettingsSection>
		</SettingsPage>
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
