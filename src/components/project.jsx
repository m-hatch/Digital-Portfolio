import React from 'react';

export default React.createClass({
  getProject: function() {
    return this.props.json || {};
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
          <p>{ this.getProject().description }</p>
        </div>
      </div>
    );
  }
});