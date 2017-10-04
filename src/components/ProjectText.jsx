import React from 'react';
import VerticalButton from './VerticalButton';

export default React.createClass({

  render: function() {
    return (
      <div className="project__text">

        <h3 className="project__heading">{ this.props.projectName }</h3>
        <p className="project__tagline">{ this.props.tagline }</p>

        <ul>
          { this.props.github && 
            <li className="project__list-item">
              <a className="project__link" href={this.props.github} target="_blank">Source Code</a>
            </li> 
          }
          { this.props.webLink && 
            <li className="project__list-item">
              <a className="project__link" href={ this.props.webLink } target="_blank">View Project</a>
            </li> 
          }
          <li>
            <button className="button project__button" onClick={ this.props.openModal }>
              Description
            </button>
          </li>
        </ul>

        <VerticalButton label="Description" openModal={ this.props.openModal } />

      </div>
    );
  }
  
});