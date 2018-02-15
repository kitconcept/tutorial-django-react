import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import api from './middleware/api';
import Api from './helpers/Api/Api';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), api(new Api())];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const rootReducer = combineReducers({
  routing: routerReducer
});

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
