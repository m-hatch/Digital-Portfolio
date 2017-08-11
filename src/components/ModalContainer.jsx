import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const ModalContainer = React.createClass({

  getRichText(markup) {
    return { __html: markup };
  },

  openModal: function(event, project) {
    this.props.dispatch(actions.showModal(true));
    this.props.dispatch(actions.setModalContent(project));
  },

  closeModal: function() {
    this.props.dispatch(actions.showModal(false));
  },

  handleOutsideClick: function(event) {
    const modalContainer = this.container;

    if(event.target == modalContainer) {
      this.closeModal();
    }
  },
  
  render: function() {
    return (
      <Modal 
        name={ this.props.content.name }
        content={ this.getRichText(this.props.content.description) }
        containerRef={ el => this.container = el }
        showModal={ this.props.showModal }
        closeModal={ this.closeModal }
        handleOutsideClick={ this.handleOutsideClick} />
    );
  }

});

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    content: state.modal.content
  };
}

export default connect(
  mapStateToProps
)(ModalContainer);