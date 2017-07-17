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
              <a className="project__link" href={this.props.github}>GitHub</a>
            </li> 
          }
          { this.props.webLink && 
            <li className="project__list-item">
              <a className="project__link" href={ this.props.webLink }>Link</a>
            </li> 
          }
        </ul>

        <button className="button project__button">Description</button>
        <VerticalButton label="Description" />

      </div>
    );
  }
  
});