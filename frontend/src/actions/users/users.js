/**
 * Users actions.
 * @module actions/users/users
 */

/**
 * Get users.
 * @function getUsers
 * @param {string} url Content url.
 * @returns {Object} Get user action.
 */
export function getUsers() {
  return {
    type: 'GET_USERS',
    promise: api => api.get(`users/`)
  };
}
