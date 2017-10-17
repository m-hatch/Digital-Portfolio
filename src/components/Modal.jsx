import React from 'react';

export default (props) => {

  return (
    <div 
      ref={ props.containerRef }
      className={ props.showModal ? "modal modal--open" : "modal" } 
      onClick={ props.handleOutsideClick }>

      <div className="modal__content">
        <span className="modal__close" onClick={ props.closeModal }>&times;</span>
        
        <h3 className="modal__title">{ props.name }</h3>
        <div dangerouslySetInnerHTML={ props.content }></div>

        <button className="button modal__close-btn" onClick={ props.closeModal }>Close</button>
      </div>

    </div>
  );

}