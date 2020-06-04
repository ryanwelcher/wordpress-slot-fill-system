
// Actions
import {
	SAVE_SETTINGS,
	START_SAVE_SETTINGS,
	FINISH_SAVE_SETTINGS,
	CATCH_SAVE_SETTINGS,
	CHANGE_TAB,
	UPDATE_SETTING,
	GET_SETTINGS,
	RECEIVE_SETTINGS,
	FINISH_GET_SETTINGS,
} from './constants';

const actions = {

	*getSettings() {
		let response, error;
		try {
			response = yield {
				payload: {},
				type: GET_SETTINGS,
			};

			yield actions.recieveSetting( response );

			yield {
				payload: { isSaving: false },
				type: FINISH_GET_SETTINGS,
			};
		} catch ( e ) {
			error = e;
		}

		return { response, error };
	},

	*saveSettings( settings ) {
		let response, error;
		yield {
			payload: { isSaving: true },
			type: START_SAVE_SETTINGS,
		};

		try {
			response = yield {
				payload: { ...settings },
				type: SAVE_SETTINGS,
			};

			yield {
				payload: {},
				type: FINISH_SAVE_SETTINGS,
			};
		} catch ( e ) {
			error = e;
			yield {
				payload: { error },
				type: CATCH_SAVE_SETTINGS,
			};
		}
		return { response, error };
	},

	recieveSetting( response ) {
		const { extending_gutenberg: extendingGutenberg } = response;
		return {
			payload: { ...JSON.parse( extendingGutenberg ) },
			type: RECEIVE_SETTINGS,
		};
	},

	changeTab( slug ) {
		return {
			payload: { slug },
			type: CHANGE_TAB,
		};
	},

	updateSetting( key, value ) {
		return {
			payload: { key, value },
			type: UPDATE_SETTING,
		};
	},
};

export default actions;
