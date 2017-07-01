import React from 'react';
import ProjectImage from './ProjectImage';

export default React.createClass({
  getProject: function() {
    return this.props.project || {};
  },
  render: function() {
    return (
      <div className="project">
        <ProjectImage img={ this.getProject().img } imgAlt={ this.getProject().img_alt } />
        <div className="project__text">
          <h2>{ this.getProject().name }</h2>
          <p>{ this.getProject().tagline }</p>
          <ul>
            { 
              this.getProject().github && <li><a href={this.getProject().github}>GitHub</a></li> 
            }
            <li><a href={ this.getProject().link }>Link</a></li>
          </ul>
          <button className="button">Description</button>
        </div>
      </div>
    );
  }
});