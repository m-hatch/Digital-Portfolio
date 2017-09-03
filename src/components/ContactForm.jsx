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
          
          <div>
            <form className="contact-form__container" action="">

              <label htmlFor="fname">First Name</label>
              <input className="contact-form__input" type="text" id="fname" name="firstname" placeholder="first name"/>

              <label htmlFor="lname">Last Name</label>
              <input className="contact-form__input" type="text" id="lname" name="lastname" placeholder="last name"/>

              <label htmlFor="email">Email</label>
              <input className="contact-form__input" type="text" id="email" name="email" placeholder="email"/>

              <label htmlFor="company">Company/Affiliation</label>
              <input className="contact-form__input" type="text" id="company" name="company" placeholder="company/affiliation"/>

              <label htmlFor="message">Message</label>
              <textarea className="contact-form__textarea" id="message" name="message" placeholder="message..."></textarea>

              <input className="contact__button" type="submit" value="Submit"/>

            </form>
          </div>

        </div>

      </div>
    );
  }

});