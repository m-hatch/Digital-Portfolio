import React from 'react';
import LazyLoad from 'react-lazyload';

export default (props) => {
  
  return (
    <div className="project__image">
      <a href={ props.link ? props.link : props.github }>

        <div className="image image__filter">
          <i className="image__icon icon-search"></i>
        </div>

        <LazyLoad height={306} offset={300} debounce={0} throttle={100}>
          <img className="image" 
            src={ 'img/' + props.img } 
            alt={ props.imgAlt } />
        </LazyLoad>
        
      </a>
    </div>
  );

}