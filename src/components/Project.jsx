import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';

export default React.createClass({

  getProject: function() {
    return this.props.project || {};
  },

  handleClick: function(event) {
    this.props.openModal(event, this.getProject());
  },

  render: function() {
    return (
      <div className="project">

        <ProjectImage 
          img={ this.getProject().img } 
          imgAlt={ this.getProject().img_alt } />

        <ProjectText 
          projectName={ this.getProject().name } 
          tagline={ this.getProject().tagline } 
          description={ this.getProject.description }
          github={ this.getProject().github }
          webLink={ this.getProject().link } 
          openModal={ this.handleClick } />

      </div>
    );
  }
  
});