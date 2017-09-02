import React from 'react';
import Section from './Section';

export default React.createClass({

  render: function() {
    return (
      <Section heading="Contact" bg="white">

          <div className="contact">

            <h3 className="contact__heading">Want to work together?</h3>
            
            <p>I am currently accepting new offers and would love to hear about yours. 
              Please take a moment to tell me about it.</p>

            <button className="button contact__button">
              Send a message
            </button>

          </div>

      </Section>
    );
  }
  
});