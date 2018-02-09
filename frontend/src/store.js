import createHistory from 'history/createBrowserHistory';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { api } from './middleware';
import reducer from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history), thunk, api];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

/**
 * AddToMiddleWare.
 * @function addToMiddleWare
 * @param {Array} data Middleware Array
 * @param {Object} logger Logger instance
 * @returns {Array} middleware.
 */
const addToMiddleWare = (data, logger) => {
  return data;
};

/**
 * Configure store.
 * @function configureStore
 * @param {Object} initialState state object
 * @param {Object} history state object
 * @param {bool} logger showLogger
 * @param {Object} apiHelper ApiHelper
 * @returns {Object} Store.
 */
export default function configureStore(
  initialState,
  history,
  logger,
  apiHelper
) {
  const middlewares = addToMiddleWare(
    [applyMiddleware(routerMiddleware(history), thunk, api(apiHelper))],
    logger
  );

  const createStoreWithMiddleware = compose(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
