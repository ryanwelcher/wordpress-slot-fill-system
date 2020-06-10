
/**
 * Internal dependencies
 */
import {
	CHANGE_TAB,
	START_SAVE_SETTINGS,
	FINISH_SAVE_SETTINGS,
	UPDATE_SETTING,
	GET_SETTINGS,
	RECEIVE_SETTINGS,
	FINISH_GET_SETTINGS,
} from './constants';

const reducer = ( state, { payload, type } ) => {
	switch ( type ) {
		case GET_SETTINGS: {
			return {
				...state,
				loadingSettings: true,
			};
		}

		case RECEIVE_SETTINGS: {
			return {
				...state,
				settings: payload,
			};
		}

		case FINISH_GET_SETTINGS: {
			return {
				...state,
				loadingSettings: false,
			};
		}
		case START_SAVE_SETTINGS: {
			const { isSaving } = payload;
			return {
				...state,
				isSaving,
			};
		}
		case FINISH_SAVE_SETTINGS: {
			return {
				...state,
				isSaving: false,
			};
		}
		case UPDATE_SETTING: {
			const { settings } = state;
			const { key, value } = payload;
			const newSettings = {
				...settings,
				[ key ]: value,

			};
			return {
				...state,
				settings: newSettings,
			};
		}

		case CHANGE_TAB: {
			return {
				...state,
				activePage: payload,
			};
		}

		default: {
			return { ...state };
		}
	}
};
export default reducer;
