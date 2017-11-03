import React from 'react';
import Project from './Project';
import Section from './Section';
import * as util from '../util/utilities';

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
      return <Project key={ project.name }
              project={ project } />;
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

export default ProjectsContainer;
