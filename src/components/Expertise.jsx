import React from 'react';

export default React.createClass({

  getSkills: function() {
    const expertise = this.props.skills || [];
    const skills = expertise.map((skill, index) => {
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
  },

  render: function() {
    return (
      <div className="expertise">

        <h3 className="expertise__heading">{ this.props.heading }</h3>
        <span className="expertise__sub-heading">{ this.props.description }</span>

        <div className="expertise__grid">{ this.getSkills() }</div>

      </div>
    );
  }
  
});