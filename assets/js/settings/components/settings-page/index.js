import { useDispatch, useSelect } from '@wordpress/data';
const SettingsPage = ( { title, children } ) => {
	const isSaving = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getSavingStatus() );
	const settings = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getSettings() );
	const { saveSettings } = useDispatch( 'extending-gutenberg/settings' );
	return (
		<>
			<div className="wrap plugin-install-tab-popular">
				<h1>{ title }</h1>
				{ children }
				<p className="submit">
					<button
						disabled={ isSaving }
						className="button button-primary"
						onClick={ () => saveSettings( settings ) }
					>Save Changes
					</button>
				</p>
			</div>
		</>
	);
};

export default SettingsPage;
