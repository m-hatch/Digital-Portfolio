import React from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './NavbarContainer';
import Splash from './Splash';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import Modal from './Modal';
import Footer from './Footer';

export default React.createClass({

  getInitialState: function () {
      return {
         showModal: false,
         modalContent: {}
      };
   },

  getData: function() {
    return this.props.appData;
  },

  openModal: function(event, project) {
    console.log('open modal');
    this.setState({ showModal: true , modalContent: project});
  },

  closeModal: function() {
    console.log('close modal');
    this.setState({ showModal: false });
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
          <ProjectsContainer 
            projects={ this.getData().projects }
            openModal={ this.openModal } />
          <Contact />
        </div>

        <Modal 
          showModal={ this.state.showModal }
          closeModal={ this.closeModal } 
          project={ this.state.modalContent} />

        <Footer content={ this.getData().myinfo } />

      </div>
    );
  }
  
});