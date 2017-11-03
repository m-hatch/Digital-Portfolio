import React from 'react';

export default (props) => {

  return (
    <div 
      ref={ props.formContainerRef }
      className={ props.showForm ? "dialog dialog--open" : "dialog" } 
      onClick={ props.handleOutsideClick }>

      <div className="contact-form">

        <div>
          <span className="contact-form__close" onClick={ props.closeForm }>&times;</span>
          <h3 className="contact-form__heading">Contact Form</h3>
        </div>

        { 
          props.completed && 
          <div>
            <img src="img/checkmark.png" alt="checkmark" className="contact-form__checkmark"/>
            <p className="contact-form__confirm">Your message has been sent!</p>
          </div>
        }
        
        <form className={ props.completed ? "contact-form__container contact-form__container--complete" : "contact-form__container" }
          ref={ props.formRef }
          id="contactForm" noValidate>

          <label htmlFor="firstname" 
            id="firstnameLabel">First Name</label>
          <input className="contact-form__input" 
            type="text" 
            id="firstname" 
            name="firstname" 
            placeholder="first name"
            onChange={ props.handleChange }
            required />
          <div className="contact-form__error" id="firstnameError" />

          <label htmlFor="lastname"
            id="lastnameLabel">Last Name</label>
          <input className="contact-form__input" 
            type="text" 
            id="lastname" 
            name="lastname" 
            placeholder="last name"
            onChange={ props.handleChange }
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
            onChange={ props.handleChange }
            required />
          <div className="contact-form__error" id="emailError" />

          <label htmlFor="company"
            id="companyLabel">Company/Affiliation</label>
          <input className="contact-form__input" 
            type="text" 
            id="company" 
            name="company" 
            placeholder="company/affiliation"
            onChange={ props.handleChange }
            required />
          <div className="contact-form__error" id="companyError" />

          <label htmlFor="message"
            id="messageLabel">Message</label>
          <textarea className="contact-form__input contact-form__textarea" 
            id="message" 
            name="message" 
            placeholder="message..."
            onChange={ props.handleChange }
            required></textarea>
          <div className="contact-form__error" id="messageError" />

          <input className="contact__button" 
            type="button" 
            value="Submit"
            onClick={ props.handleSubmit } />

        </form>

      </div>

    </div>
  );

}