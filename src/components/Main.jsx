import React from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './NavbarContainer';
import Splash from './Splash';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import ModalContainer from './ModalContainer';
import Footer from './Footer';

export default React.createClass({

  getData: function() {
    return this.props.appData;
  },

  render: function() {
    return (
      <div> 

        <NavbarContainer 
          name={ this.getData().myinfo.name } 
          nav={ this.getData().navigation } />

        <Splash text={ this.getData().myinfo } />

        <div className="l-container">
          <About description={ this.getData().about.description } />
          <ProjectsContainer projects={ this.getData().projects } />
          <Contact />
        </div>

        <ModalContainer />

        <Footer content={ this.getData().myinfo } />

      </div>
    );
  }
  
});
