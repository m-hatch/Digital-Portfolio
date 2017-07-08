import React from 'react';
import NavbarContainer from './NavbarContainer';
import Splash from './Splash';
import ProjectsContainer from './ProjectsContainer';

export default React.createClass({

  getData: function() {
    return this.props.appData;
  },

  render: function() {
    return (
      <div> 

        <NavbarContainer nav={ this.getData().navigation } />

        <Splash text={ this.getData().splash } />

        <div className="l-container">
          <ProjectsContainer projects={ this.getData().projects } />
        </div>

      </div>
    );
  }
  
});