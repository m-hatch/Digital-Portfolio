import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import ProjectsContainer from './components/ProjectsContainer';
import myData from './data.json';

ReactDOM.render(
  <Main>
    <ProjectsContainer projects={myData.projects} />
  </Main>,
  document.getElementById('app')
);