import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const ContactFormContainer = React.createClass({

  openForm: function(event) {
    this.props.dispatch(actions.showContactForm(true));
  },

  closeForm: function() {
    this.props.dispatch(actions.showContactForm(false));console.log('close');
  },

  handleOutsideClick: function(event) {
    const formContainer = this.form_container;

    if(event.target == formContainer) {
      this.closeForm();
    }
  },
  
  render: function() {
    return (
      <ContactForm 
        formContainerRef={ el => this.form_container = el }
        showForm={ this.props.showForm }
        closeForm={ this.closeForm }
        handleOutsideClick={ this.handleOutsideClick } />
    );
  }

});

const mapStateToProps = (state) => {
  return {
    showForm: state.contact.showForm
  };
}

export default connect(
  mapStateToProps
)(ContactFormContainer);