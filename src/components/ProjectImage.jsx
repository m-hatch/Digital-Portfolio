import React from 'react';

export default (props) => {
  
  return (
    <div className="project__image">
      <a href={ props.link ? props.link : props.github } target="_blank">
        <div className="image__filter"></div>
        <img className="project__img" 
          src={ 'img/' + props.img } 
          alt={ props.imgAlt } />
      </a>
    </div>
  );

}