import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import appData from './data.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';

// create Redux store
const store = createStore(reducer);

// render app
ReactDOM.render(
  <Provider store={store}>
    <Main appData={ appData } />
  </Provider>,
  document.getElementById('app')
);