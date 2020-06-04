/**
 * WordPress dependencies
 */
import {
	render,
	useReducer,
	useEffect,
} from '@wordpress/element';

import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import SettingsPage from './components/SettingsPage';
import SettingsSection from './components/SettingsSection';
import { InputFieldSetting, CheckBoxSetting } from './components/SettingTypes';
import Notice from './Notice';
import PPCContext from './components/PPCContext';

/**
 * External Depedencies
 */
import { isError } from 'lodash';
import { uuid } from 'uuidv4';

const TRIGGER_NOTICE = 'TRIGGER_NOTICE';
const CLEAR_NOTICE = 'CLEAR_NOTICE';
const UPDATE_WORDCOUNT = 'UPDATE_WORDCOUNT';
const UPDATE_FEATURED_IMAGE = 'UPDATE_FEATURED_IMAGE';
const SAVING = 'TOGGLE_SAVING';

const reducer = ( state, action ) => {
	switch ( action.type ) {
		case UPDATE_WORDCOUNT:
			return {
				...state,
				wordcount: action.payload,
			};
		case UPDATE_FEATURED_IMAGE:
			return {
				...state,
				featuredImage: ! state.featuredImage,
			};
		case SAVING:
			return {
				...state,
				saving: ! state.saving,
			};
		case TRIGGER_NOTICE:
			return {
				...state,
				notices: [
					action.payload,
					...state.notices,
				],
			};
		case CLEAR_NOTICE:
			const notices = state.notices.filter( ( notice ) => action.payload !== notice.id );
			return {
				...state,
				notices,
			};
		default:
			return state;
	}
};

const App = () => {
	// Get the
	const { nonce = false, restBase, state: options } = window._extendingGutenbergSettings;
	const [ appState, dispatch ] = useReducer( reducer, { ...options, saving: false, notices: [] } );

	/**
	 * Save routine.
	 *
	 * @todo strip out the non-data state before saving.
	 */
	useEffect( () => {
		const updateData = async () => {
			const requestUrl = `${ restBase }wp/v2/settings`;
			console.log( appState );
			const { saving, notices, ...options } = appState;
			const results = await postRequest( { requestUrl, nonce, data: { pre_publish_checklist: JSON.stringify( options ) } } );
			if ( isError( results ) ) {
				dispatch( {
					type: TRIGGER_NOTICE,
					payload: {
						id: uuid(),
						type: 'error',
						message: results.message,
					},
				} );
			} else {
				dispatch( {
					type: TRIGGER_NOTICE,
					payload: {
						id: uuid(),
						type: 'success',
						message: 'Settings saved.',
					},
				} );
			}
			dispatch( { type: 'TOGGLE_SAVING' } );
		};

		if ( true === appState.saving ) {
			updateData();
		}
	}, [ appState.saving ] );

	const accountID = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getForm( 'main' ) );
	console.log( 'datastore', accountID );
	return (
		<PPCContext.Provider value={ { dispatch, ...appState } }>
			<SettingsPage title="PrePublish Checklist Settings">
				{
					appState.notices.map( ( item ) => <Notice key={ item.id } id={ item.id } type={ item.type } message={ item.message } /> )
				}
				<SettingsSection>
					<InputFieldSetting
						label="Wordcount"
						type="number"
						value={ appState.wordcount }
						onChange={ ( e ) => {
							dispatch( {
								type: UPDATE_WORDCOUNT,
								payload: e.target.value,
							} );
						} }
					/>
					<CheckBoxSetting
						label="Require a Featured Image"
						id="featured_image"
						value={ appState.featuredImage }
						onChange={ () => dispatch( { type: UPDATE_FEATURED_IMAGE } ) }
					/>
				</SettingsSection>
			</SettingsPage>
		</PPCContext.Provider>
	);
};

render(
	<App />,
	document.querySelector( '#extending-gutenberg-settings' )
);
