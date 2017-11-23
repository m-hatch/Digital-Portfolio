import React from 'react';
import Splash from './Splash';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import ModalContainer from './ModalContainer';

export default (props) => {

  return (
    <div> 

      <Splash text={ props.appData.myinfo } />

      <div className="l-container">

        <About about={ props.appData.about } />
        <ProjectsContainer projects={ props.appData.projects } />
        <Contact content={ props.appData.contact } />

      </div>

      <ModalContainer />

    </div>
  );
  
}
