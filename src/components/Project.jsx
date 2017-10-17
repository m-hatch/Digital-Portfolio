import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';

export default (props) => {

  // intialize project obj
  const getProject = () => {
    return props.project || {};
  };

  // call click handler passed through props with project data
  const handleClick = (event) => {
    props.openModal(event, getProject());
  };

  return (
    <div className="project">

      <ProjectImage 
        img={ getProject().img } 
        imgAlt={ getProject().img_alt }
        link={ getProject().link } />

      <ProjectText 
        projectName={ getProject().name } 
        tagline={ getProject().tagline } 
        description={ getProject.description }
        github={ getProject().github }
        webLink={ getProject().link } 
        openModal={ handleClick } />

    </div>
  );
  
}