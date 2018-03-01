/**
 * Users actions.
 * @module actions/users/users
 */

import { GET_USERS } from '../../constants/ActionTypes';

/**
 * Get users.
 * @function getUsers
 * @param {string} url Content url.
 * @returns {Object} Get user action.
 */
export default function getUsers() {
  return {
    type: 'GET_USERS',
    promise: api => api.get(`users/`)
  };
}
