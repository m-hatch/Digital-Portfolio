import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div 
        ref={ this.props.containerRef }
        className={ this.props.showModal ? "modal modal--open" : "modal" } 
        onClick={ this.props.handleOutsideClick }>

        <div className="modal__content">
          <span className="modal__close" onClick={ this.props.closeModal }>&times;</span>
          
          <h3 className="modal__title">{ this.props.name }</h3>
          <div dangerouslySetInnerHTML={ this.props.content }></div>

          <button className="modal__close-btn" onClick={ this.props.closeModal }>Close</button>
        </div>

      </div>
    );
  }

});