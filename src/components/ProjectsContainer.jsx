import React from 'react';
import Project from './Project';
import Section from './Section';
import * as util from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ProjectsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.getProjects = this.getProjects.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getProjects() {
    const projects = this.props.projects.map((project, index) => {
      return <Project project={ project } 
              key={ project.name } 
              openModal={ this.props.openModal } />;
    });
    
    return projects;
  }

  handleScroll(event) {
    const scrollCenter = util.getScrollCenter();
    const projects = document.querySelectorAll('.project');

    Array.prototype.forEach.call(projects, function(el){
      const elemPos = util.getOffsetTop(el);

      // add active class when project in view
      ((elemPos < scrollCenter) && (elemPos + el.clientHeight > scrollCenter)) 
        ? el.classList.add('project--active') : el.classList.remove('project--active');
    });
  }
  
  render() {
    return (
      <Section heading="Projects" bg="grey">
          { this.getProjects() }
      </Section>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (event, project) => {
      dispatch(actions.showModal(true));
      dispatch(actions.setModalContent(project));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectsContainer);