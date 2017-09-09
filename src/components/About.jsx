import React from 'react';
import Section from './Section';
import Expertise from './Expertise';

export default React.createClass({

  getImage: function() {
    return this.props.about.img || '';
  },

  getDescription: function() {
    return { __html: this.props.about.description } || '';
  },

  render: function() {
    return (
      <Section heading="About" bg="white">

          <div className="about">

            <div className="about__image">
              <img className="about__img" src={ 'img/' + this.getImage() } alt="profile pic"/>
            </div>

            <div className="about__description"
              dangerouslySetInnerHTML={ this.getDescription() }>
            </div>

          </div>

          <Expertise 
            heading={ this.props.about.skills_heading }
            description={ this.props.about.skills_description }
            skills={ this.props.about.expertise } />

      </Section>
    );
  }
  
});