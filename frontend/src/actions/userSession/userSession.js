/**
 * Search actions.
 * @module actions/search/search
 */

import { LOGIN, LOGOUT } from '../../constants/ActionTypes';

/**
 * Login function.
 * @function login
 * @param {string} username Username.
 * @param {string} password Password.
 * @returns {Object} Login action.
 */
export function login(username, password) {
  return {
    type: LOGIN,
    promise: api =>
      api.post('api-token-auth/', { data: { username, password } })
  };
}

/**
 * Logout function.
 * @function logout
 * @returns {Object} Logout action.
 */
export function logout() {
  return {
    type: LOGOUT
  };
}
