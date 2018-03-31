import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.getProject = this.getProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  getProject() {
    return this.props.project || {};
  }

  // call click handler with project data
  handleClick(event) {
    event.preventDefault();
    this.props.openModal(this.getProject());
  }

  handleHover(mouseEvent) {
    if (mouseEvent.type === 'mouseenter') {
      this.props.peekModal(true);
    }
    if (mouseEvent.type === 'mouseleave') {
      this.props.peekModal(false);
    }
  }

  render() {
    return (
      <div className="project">

        <ProjectImage 
          img={ this.getProject().img } 
          imgAlt={ this.getProject().img_alt }
          link={ this.getProject().link }
          github={ this.getProject().github} />

        <ProjectText 
          projectName={ this.getProject().name } 
          tagline={ this.getProject().tagline } 
          description={ this.getProject.description }
          github={ this.getProject().github }
          webLink={ this.getProject().link } 
          openModal={ this.handleClick }
          onMouseHover={ this.handleHover } />

      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (project) => {
      dispatch(actions.showModal(true));
      dispatch(actions.setModalContent(project));
    },
    peekModal: (isPeeking) => {
      dispatch(actions.peekModal(isPeeking));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Project);
