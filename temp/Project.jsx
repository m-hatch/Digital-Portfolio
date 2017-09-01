import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const Project = React.createClass({

  getProject: function() {
    return this.props.project || {};
  },

  handleClick: function(event) {
    this.props.dispatch(actions.showModal(true));
    this.props.dispatch(
      actions.setModalContent(this.getProject())
    );
  },

  render: function() {
    return (
      <div className="project">

        <ProjectImage 
          img={ this.getProject().img } 
          imgAlt={ this.getProject().img_alt }
          link={ this.getProject().link } />

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

export default connect()(Project);