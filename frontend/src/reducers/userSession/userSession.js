/**
 * User session reducer.
 * @module reducers/userSession
 */

import { LOGIN, LOGOUT } from '../../constants/ActionTypes';

const initialState = {
  token: null,
  login: {
    loaded: false,
    loading: false,
    error: null
  }
};

/**
 * User session reducer.
 * @function userSession
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function userSession(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        token: null,
        login: {
          loading: true,
          loaded: false,
          error: null
        }
      };
    case `${LOGIN}_SUCCESS`:
      return {
        ...state,
        token: action.result.token,
        login: {
          loading: false,
          loaded: true,
          error: null
        }
      };
    case `${LOGIN}_FAIL`:
      return {
        ...state,
        token: null,
        login: {
          loading: false,
          loaded: false,
          error: action.error.non_field_errors
        }
      };
    case LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}
