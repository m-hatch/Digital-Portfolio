import React from 'react';
import ReactDOM from 'react-dom';
import appData from '../data.json';
import NavbarContainer from './NavbarContainer';
import Splash from './Splash';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import ModalContainer from './ModalContainer';
import ContactFormContainer from './ContactFormContainer';
import Footer from './Footer';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/alldata')
      .then(response => response.json())
      .then(data => this.props.dispatch(
        actions.setMainContent(data))
      );
  }

  getData(data) {
    //return this.props.content;
    return appData;
  }

  render() {
    return (
      <div> 

        <NavbarContainer 
          name={ this.getData().myinfo.name } 
          nav={ this.getData().navigation } />

        <Splash text={ this.getData().myinfo } />

        <div className="l-container">
          <About about={ this.getData().about } />
          <ProjectsContainer projects={ this.getData().projects } />
          <Contact content={ this.getData().contact } />
        </div>

        <ModalContainer />
        <ContactFormContainer />

        <Footer links={ this.getData().myinfo.links } />

      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    content: state.main.content
  };
};

export default connect(
  mapStateToProps
)(Main);