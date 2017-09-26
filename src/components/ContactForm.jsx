import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div 
        ref={ this.props.formContainerRef }
        className={ this.props.showForm ? "dialog dialog--open" : "dialog" } 
        onClick={ this.props.handleOutsideClick }>

        <div className="contact-form">

          <div>
            <span className="contact-form__close" onClick={ this.props.closeForm }>&times;</span>
            <h3 className="contact-form__heading">Contact Form</h3>
          </div>

          { 
            this.props.completed && 
            <div>
              <img src="img/checkmark.png" alt="checkmark" className="contact-form__checkmark"/>
              <p className="contact-form__confirm">Your message has been sent!</p>
            </div>
          }
          
          <form className={ this.props.completed ? "contact-form__container contact-form__container--complete" : "contact-form__container" }
            ref={ this.props.formRef }
            id="contactForm" noValidate>

            <label htmlFor="firstname" 
              id="firstnameLabel">First Name</label>
            <input className="contact-form__input" 
              type="text" 
              id="firstname" 
              name="firstname" 
              placeholder="first name"
              onChange={ this.props.handleChange }
              required />
            <div className="contact-form__error" id="firstnameError" />

            <label htmlFor="lastname"
              id="lastnameLabel">Last Name</label>
            <input className="contact-form__input" 
              type="text" 
              id="lastname" 
              name="lastname" 
              placeholder="last name"
              onChange={ this.props.handleChange }
              required />
            <div className="contact-form__error" id="lastnameError" />

            <label htmlFor="email"
              id="emailLabel">Email</label>
            <input className="contact-form__input" 
              type="text" 
              id="email" 
              name="email" 
              placeholder="email"
              pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:(\.[a-zA-Z0-9-]+)+)+$"
              onChange={ this.props.handleChange }
              required />
            <div className="contact-form__error" id="emailError" />

            <label htmlFor="company"
              id="companyLabel">Company/Affiliation</label>
            <input className="contact-form__input" 
              type="text" 
              id="company" 
              name="company" 
              placeholder="company/affiliation"
              onChange={ this.props.handleChange }
              required />
            <div className="contact-form__error" id="companyError" />

            <label htmlFor="message"
              id="messageLabel">Message</label>
            <textarea className="contact-form__input contact-form__textarea" 
              id="message" 
              name="message" 
              placeholder="message..."
              onChange={ this.props.handleChange }
              required></textarea>
            <div className="contact-form__error" id="messageError" />

            <input className="contact__button" 
              type="button" 
              value="Submit"
              onClick={ this.props.handleSubmit } />

          </form>

        </div>

      </div>
    );
  }

});