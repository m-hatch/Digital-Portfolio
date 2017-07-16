import React from 'react';
import Section from './Section';

export default React.createClass({

  getRichText(markup) {
    return { __html: markup };
  },

  render: function() {
    return (
      <Section heading="About" bg="white">

          <div className="about">
            <div className="about__image">
              <img className="about__img" src="img/profile.png" alt="profile pic"/>
            </div>

            <div className="about__description"
              dangerouslySetInnerHTML={ this.getRichText(this.props.description) }>
            </div>
          </div>

      </Section>
    );
  }
  
});