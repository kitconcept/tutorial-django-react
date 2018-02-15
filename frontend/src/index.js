import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import './index.css';

import { Api, persistAuthToken } from './helpers';
// import { browserHistory, Router } from 'react-router';
// import { syncHistoryWithStore } from "react-router-redux";

const myapi = new Api();
const initialState = window.__data; // eslint-disable-line no-underscore-dangle
const store = configureStore(initialState, undefined, false, myapi);
// const history = syncHistoryWithStore(browserHistory, store);
// addLocaleData([...nlLocaleData, ...deLocaleData, ...enLocaleData]);
persistAuthToken(store);

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
