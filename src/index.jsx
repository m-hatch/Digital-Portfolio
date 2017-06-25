import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsContainer from './components/ProjectsContainer';
import myData from './data.json';

ReactDOM.render(
  <ProjectsContainer projects={myData.projects} />,
  document.getElementById('app')
);