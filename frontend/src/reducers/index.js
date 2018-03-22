/**
 * Root reducer.
 * @module reducers
 */

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import users from './users/users';
import userSession from './userSession/userSession';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default combineReducers({
  routing: routerReducer,
  users,
  userSession
});
