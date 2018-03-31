import React from 'react';

export default (props) => {

  return (
    <div className="vertical-button">

      <button ref={ props.btnRef } 
        className="vertical-button__btn" 
        onClick={ props.openModal }
        onMouseEnter={ props.onMouseHover }
        onMouseLeave={ props.onMouseHover }>
          { props.label }
      </button>

      <div className="vertical-button__stroke"></div>
      
    </div>
  );
  
}