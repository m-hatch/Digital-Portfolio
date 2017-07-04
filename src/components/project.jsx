import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';

export default React.createClass({

  getProject: function() {
    return this.props.project || {};
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
          github={ this.getProject().github }
          webLink={ this.getProject().link }/>

      </div>
    );
  }
  
});