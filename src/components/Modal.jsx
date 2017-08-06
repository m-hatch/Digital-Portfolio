import React from 'react';

export default React.createClass({

  getRichText(markup) {
    return { __html: markup };
  },

  handleClick: function(event) {
    const modalContainer = this.refs.modalContainer;

    if(event.target == modalContainer) {
      this.props.closeModal();
    }
  },
  
  render: function() {
    return (
      <div 
        ref="modalContainer"
        className={ this.props.showModal ? "modal modal--open" : "modal" } 
        onClick={ this.handleClick }>

        <div className="modal__content">
          <span className="modal__close" onClick={ this.props.closeModal }>&times;</span>
          
          <h3 className="modal__title">{ this.props.project.name}</h3>
          <div dangerouslySetInnerHTML={ this.getRichText(this.props.project.description) }></div>

          <button className="modal__close-btn" onClick={ this.props.closeModal }>Close</button>
        </div>

      </div>
    );
  }

});