import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import appData from './data.json';
import { createStore } from 'redux';
import reducer from './reducers/reducers';

const init = {
	splash: {
		top: 0,
		opacity: 1
	}
};

let store = createStore(reducer, init);

console.log(store.getState());
store.dispatch({ type: 'PARALLAX', position: 4 });
console.log(store.getState());

ReactDOM.render(
  <Main appData={ appData } />,
  document.getElementById('app')
);