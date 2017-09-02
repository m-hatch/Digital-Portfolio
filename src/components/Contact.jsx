import React from 'react';
import Section from './Section';

export default React.createClass({

  getContent: function() {
    return this.props.content || {};
  },

  render: function() {
    return (
      <Section heading="Contact" bg="white">

          <div className="contact">

            <h3 className="contact__heading">{ this.getContent().heading }</h3>
            
            <p>{ this.getContent().text }</p>

            <button className="button contact__button">
              Send a message
            </button>

          </div>

      </Section>
    );
  }
  
});