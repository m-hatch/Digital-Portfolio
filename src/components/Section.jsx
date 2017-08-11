import React from 'react';

export default React.createClass({

  getHeading: function() {
    return this.props.heading;
  },

  getBackground: function() {
    return (this.props.bg === 'grey') ? " l-section__bg" : "";
  },

  render: function() {
    return (
      <div id={ this.getHeading() } className={ "l-section" + this.getBackground() }>
        <div className="l-wrapper">

          <h2 className="l-section__heading">{ this.getHeading() }</h2>

          { this.props.children }

        </div>
      </div>
    );
  }
  
});