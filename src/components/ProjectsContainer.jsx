import React from 'react';
import Project from './Project';
import Section from './Section';

export default React.createClass({

  getProjects: function() {
    const myData = this.props.projects;
    const projects = myData.map((project, index) => {
      return <Project project={ project } key={ project.name } />;
    });
    
    return projects;
  },

  render: function() {
    return (
      <Section heading="Projects" bg="grey">
          { this.getProjects() }
      </Section>
    );
  }
  
});