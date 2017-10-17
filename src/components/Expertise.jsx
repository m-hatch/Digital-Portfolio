import React from 'react';

export default (props) => {

  // build array of skill components
  const getSkills = () => {
    const skills = props.skills.map((skill, index) => {
      return (
        <div className={ skill.is_empty ? "expertise__box expertise--empty" : "expertise__box" }
          key={ index }>
          <i className={ "fa expertise__icon " + skill.icon }></i>
          <h4 className="expertise__area">{ skill.area }</h4>
          <p>{ skill.description }</p>
        </div>
      );
    })

    return skills;
  };

  return (
    <div className="expertise">

      <h3 className="expertise__heading">{ props.heading }</h3>
      <span className="expertise__sub-heading">{ props.description }</span>

      <div>{ getSkills() }</div>

    </div>
  );
  
}