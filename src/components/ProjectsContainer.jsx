import React from 'react';
import Project from './Project';
import Section from './Section';
import * as util from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const ProjectsContainer = React.createClass({

  getProjects: function() {
    const projects = this.props.projects.map((project, index) => {
      return <Project project={ project } 
              key={ project.name } 
              openModal={ this.openModal } />;
    });
    
    return projects;
  },

  handleScroll: function(event) {
    const scrollCenter = util.getScrollCenter();
    const projects = document.querySelectorAll('.project');

    Array.prototype.forEach.call(projects, function(el){
      const elemPos = util.getOffsetTop(el);

      // add active class when project in view
      ((elemPos < scrollCenter) && (elemPos + el.clientHeight > scrollCenter)) 
        ? el.classList.add('project--active') : el.classList.remove('project--active');
    });
  },

  openModal: function(event, project) {
    this.props.dispatch(actions.showModal(true));
    this.props.dispatch(actions.setModalContent(project));
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    return (
      <Section heading="Projects" bg="grey">
          { this.getProjects() }
      </Section>
    );
  }
  
});

export default connect()(ProjectsContainer);