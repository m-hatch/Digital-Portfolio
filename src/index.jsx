import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
import Promise from 'core-js/es6/promise';
import assign from 'core-js/fn/object/assign';
import fetch from 'whatwg-fetch';

// create Redux store
const store = createStore(reducer);

// render app
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);