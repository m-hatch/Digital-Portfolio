import React from 'react';

export default (props) => {

  const getBackground = () => {
    return (props.bg === 'grey') ? "l-section l-section__bg" : "l-section";
  };

  return (
    <div id={ props.heading } className={ getBackground() }>
      <div className="l-wrapper">

        <h2 className="l-section__heading">{ props.heading }</h2>

        { props.children }

      </div>
    </div>
  );
  
}