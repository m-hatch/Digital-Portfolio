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
      <div className="l-section l-section__bg">
        <div className="l-wrapper">
          <h2 className="l-section__heading">Projects</h2>
          { this.getProjects() }
        </div>
      </div>
    );
  }
  
});