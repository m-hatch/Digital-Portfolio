import React from 'react';
import Project from './Project';

export default React.createClass({
  getProjects: function() {
    var myData = this.props.projects;
    var projects = [];

    myData.forEach((project, index) => {
      projects.push(<Project project={project} key={project.name}/>);
    });
    
    return projects;
  },
  render: function() {
    return (
      <div className="l-wrapper">
        <div className="l-section-heading">
          <h2>Projects</h2>
        </div>
          { this.getProjects() }
      </div>
    );
  }
});