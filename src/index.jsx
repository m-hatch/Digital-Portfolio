import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import NavbarContainer from './components/NavbarContainer';
import ProjectsContainer from './components/ProjectsContainer';
import appData from './data.json';

ReactDOM.render(
  <Main>
    <NavbarContainer nav={ appData.navigation }/>
    <ProjectsContainer projects={ appData.projects } />
  </Main>,
  document.getElementById('app')
);