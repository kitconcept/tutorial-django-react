/**
 * Users reducer.
 * @module reducers/users
 */

import { map } from 'lodash';

import config from '../../config';

export const GET_USERS = 'GET_USERS';

const initialState = {
  error: null,
  items: [],
  loaded: false,
  loading: false
};

/**
 * Users reducer.
 * @function users
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function users(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true
      };
    case `${GET_USERS}_SUCCESS`:
      return {
        ...state,
        error: null,
        items: map(action.result.items, item => ({
          title: item.title,
          url: item['@id'].replace(config.apiPath, '')
        })),
        loaded: true,
        loading: false
      };
    case `${GET_USERS}_FAIL`:
      return {
        ...state,
        error: action.error,
        items: [],
        loaded: false,
        loading: false
      };
    default:
      return state;
  }
}
