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

import initialState from './initial-state';
import actions from './actions';
import controls from './controls';
import reducer from './reducer';
import resolvers from './resolvers';
import selectors from './selectors';

const store = {
	initialState,
	actions,
	controls,
	reducer,
	resolvers,
	selectors,
};
export default store;

// Register our store.
registerStore( STORE_NAME, store );
