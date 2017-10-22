import React from 'react';
import VerticalButton from './VerticalButton';

export default (props) => {

    return (
      <div className="project__text">

        <h3 className="project__heading">{ props.projectName }</h3>
        <p className="project__tagline">{ props.tagline }</p>

        <ul>
          { props.github && 
            <li className="project__list-item">
              <a className="project__link" href={ props.github } target="_blank">Source Code</a>
            </li> 
          }
          { props.webLink && 
            <li className="project__list-item">
              <a className="project__link" href={ props.webLink } target="_blank">View Project</a>
            </li> 
          }
          <li>
            <button className="button project__button" onClick={ props.openModal }>
              Description
            </button>
          </li>
        </ul>

        <VerticalButton btnRef={ props.btnRef } label="Description" openModal={ props.openModal } />

      </div>
    );
  
}