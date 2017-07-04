import React from 'react';
import NavbarContainer from './NavbarContainer';
import Splash from './Splash';
import ProjectsContainer from './ProjectsContainer';

export default React.createClass({

  getData: function() {
    return this.props.appData;
  },

  requestAnimationFrame: function() {
    return window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(f){ setTimeout(f, 1000/60) };
  },
  
  render: function() {
    return (
      <div> 

        <NavbarContainer 
          nav={ this.getData().navigation } 
          animationFrame={ this.requestAnimationFrame } />

        <Splash 
          text={ this.getData().splash } 
          animationFrame={ this.requestAnimationFrame } />

        <div className="l-container">
          <ProjectsContainer projects={ this.getData().projects } />
        </div>

      </div>
    );
  }
  
});