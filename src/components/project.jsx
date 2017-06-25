import React from 'react';

export default React.createClass({
  getProject: function() {
    return this.props.json || {};
  },
  render: function() {console.log(this.getProject().name);
    return (
      <div className="project websites">
        <div className="image">
          <a href={ this.getProject().img } target="_blank">
            <img src="static/img/bmp.png" alt={ this.getProject().img_alt }/>
          </a>
        </div>
        <div className="text">
          <h3>{ this.getProject().name }</h3>
          <p>{ this.getProject().description }</p>
        </div>
      </div>
    );
  }
});