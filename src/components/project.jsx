import React from 'react';

export default React.createClass({
  getProject: function() {
    return this.props.project || {};
  },
  render: function() {
    return (
      <div className="project">
        <div className="project__image">
          <a href={ this.getProject().img } target="_blank">
            <img src="static/img/bmp.png" alt={ this.getProject().img_alt }/>
          </a>
        </div>
        <div className="project__text">
          <h2>{ this.getProject().name }</h2>
          <button>Description</button>
          <ul>
            { 
              this.getProject().github && <li><a href={this.getProject().github}>GitHub</a></li> 
            }
            <li><a href={this.getProject().link}>Link</a></li>
          </ul>
        </div>
      </div>
    );
  }
});