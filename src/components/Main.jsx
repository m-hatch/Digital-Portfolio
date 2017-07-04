import React from 'react';
import NavbarContainer from './NavbarContainer';
import ProjectsContainer from './ProjectsContainer';

export default React.createClass({

  getData: function() {
    return this.props.appData;
  },
  
  render: function() {
    return (
      <div> 

        <NavbarContainer nav={ this.getData().navigation }/>

        <div className="l-container">
          <ProjectsContainer projects={ this.getData().projects } />
        </div>

      </div>
    );
  }
  
});