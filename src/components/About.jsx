import React from 'react';
import Section from './Section';
import Expertise from './Expertise';

export default (props) => {

  const about = props.about || {};
  const description = { __html: about.description } || '';

  return (
    <Section heading="About" bg="white">

      <div className="about">

        <div className="about__image">
          <img className="about__img" src={ 'img/' + about.img } alt="profile pic"/>
        </div>

        <div className="about__description"
          dangerouslySetInnerHTML={ description }>
        </div>

      </div>

      <Expertise 
        heading={ about.skills_heading }
        description={ about.skills_description }
        skills={ about.expertise } />

    </Section>
  );

}