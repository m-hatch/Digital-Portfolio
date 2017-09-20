import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';

// create Redux store
const store = createStore(reducer);

// render app
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);