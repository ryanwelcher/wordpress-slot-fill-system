/**
 * Data Store
 */

/**
 * WordPress depenencies
 */

import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
export { STORE_NAME };

const initialState = {
	activePage: 'main',
	pages: {
		main: { data: [ 1, 2, 3, 3, 4, 5, 5 ] },
	},
};
const actions = {};
const controls = {};
const reducer = ( state, { payload, type } ) => {
	switch ( type ) {
		default: {
			return { ...state };
		}
	}
};
const resolvers = {};
const selectors = {
	getForm( state, formId ) {
		const { pages } = state;
		return pages[ formId ];
	},

	getActivePage( state ) {
		const { activePage } = state;
		return activePage;
	},
};

const store = {
	initialState,
	actions,
	controls,
	reducer,
	resolvers,
	selectors,
};

registerStore( STORE_NAME, store );

export default store;
