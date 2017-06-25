import React from 'react';
import ReactDOM from 'react-dom';
import Project from './components/Project';
import myData from './data.json';

ReactDOM.render(
  <Project json={myData.projects[0]} />,
  document.getElementById('app')
);