import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const ContactFormContainer = React.createClass({

  openForm: function(event) {
    this.props.dispatch(actions.showContactForm(true));
  },

  closeForm: function() {
    this.props.dispatch(actions.showContactForm(false));
  },

  handleOutsideClick: function(event) {
    const formContainer = this.form_container;

    if(event.target == formContainer) {
      this.closeForm();
    }
  },

  handleChange: function(e) {
    e.target.classList.add('active');
    this.showInputError(e.target.name);
  },

  handleSubmit: function() {
    const inputs = document.querySelectorAll('.contact-form__input');
    let isValid = true;

    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log('submit form');
    }
  },

  showInputError: function(name) {
    const validity = document.getElementById(name).validity;
    const label = document.getElementById(`${name}Label`).textContent;
    const error = document.getElementById(`${name}Error`);
    const isError = !validity.valid;
    let message = '';

    if (isError && validity.valueMissing) {
      message = `${label} is a required field`; 
    }
    if (isError && validity.patternMismatch) {
      message = `${label} should be a valid email address`; 
    }
    error.textContent = message;

    return !isError;
  },
  
  render: function() {
    return (
      <ContactForm 
        formContainerRef={ el => this.form_container = el }
        showForm={ this.props.showForm }
        closeForm={ this.closeForm }
        handleOutsideClick={ this.handleOutsideClick }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit } />
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