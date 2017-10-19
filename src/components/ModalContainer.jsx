import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(event) {
    const modalContainer = this.container;

    if(event.target == modalContainer) {
      this.props.closeModal();
    }
  }

  getRichText(markup) {
    return { __html: markup };
  }
  
  render() {
    return (
      <Modal 
        name={ this.props.content.name }
        content={ this.getRichText(this.props.content.description) }
        containerRef={ el => this.container = el }
        showModal={ this.props.showModal }
        closeModal={ this.props.closeModal }
        handleOutsideClick={ this.handleOutsideClick} />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    content: state.modal.content
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(actions.showModal(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);