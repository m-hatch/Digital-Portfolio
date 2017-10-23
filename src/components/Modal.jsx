import React from 'react';

export default (props) => {

  let modalClassList = "modal";
  if (props.showModal) {
    modalClassList += " modal--open";
  }
  else if (props.peekModal) {
    modalClassList += " modal--peek";
  }

  return (
    <div ref={ props.containerRef }
      className={ modalClassList } 
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