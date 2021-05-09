/**
 * AuthToken helper.
 * @module helpers/AuthToken
 */

import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

import { LOGIN } from '../../constants/ActionTypes';

/**
 * Get auth token method.
 * @method getAuthToken
 * @returns {undefined}
 */
export function getAuthToken() {
  return cookie.load('auth_token');
}

/**
 * Persist auth token method.
 * @method persistAuthToken
 * @param {object} store Redux store.
 * @returns {undefined}
 */
export function persistAuthToken(store) {
  let currentValue = getAuthToken();
  const token = cookie.load('auth_token');
  if (token) {
    store.dispatch({
      type: `${LOGIN}_SUCCESS`,
      result: {
        token
      }
    });
  }

  /**
   * handleChange method.
   * @method handleChange
   * @returns {undefined}
   */
  function handleChange() {
    const previousValue = currentValue;
    const state = store.getState();
    currentValue = state.userSession.token;

    if (previousValue !== currentValue) {
      if (currentValue === null) {
        cookie.remove('auth_token', { path: '/' });
      } else {
        cookie.save('auth_token', currentValue, {
          path: '/',
          expires: new Date(jwtDecode(currentValue).exp * 1000)
        });
      }
    }
  }

  store.subscribe(handleChange);
}
