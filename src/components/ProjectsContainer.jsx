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
      <div>
        <div className="heading">
          <h1>Projects</h1>
        </div>
          { this.getProjects() }
      </div>
    );
  }
});