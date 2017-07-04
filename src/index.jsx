import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import appData from './data.json';

ReactDOM.render(
  <Main appData={ appData } />,
  document.getElementById('app')
);