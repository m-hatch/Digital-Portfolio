import React from 'react';

export default (props) => {
  
  return (
    <div className="project__image">
      <a href={ props.link ? props.link : props.github } target="_blank">
        <div className="image image__filter">
          <i className="image__icon fa fa-search"></i>
        </div>
        <img className="image" 
          src={ 'img/' + props.img } 
          alt={ props.imgAlt } />
      </a>
    </div>
  );

}