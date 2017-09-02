import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div 
        ref={ this.props.formContainerRef }
        className={ this.props.showForm ? "dialog dialog--open" : "dialog" } 
        onClick={ this.props.handleOutsideClick }>

        <div className="contact-form">
          <span className="contact-form__close" onClick={ this.props.closeForm }>&times;</span>
          <h3 className="contact-form__heading">Contact Form</h3>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
          Lorem ipsum<br/>
        </div>

      </div>
    );
  }

});