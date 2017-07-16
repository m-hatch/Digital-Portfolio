import React from 'react';

export default React.createClass({

  getHeading() {
    return this.props.heading;
  },

  getBackground() {
    return (this.props.bg === 'grey') ? "l-section__bg" : "";
  },

  render: function() {
    return (
      <div className="l-section">
        <div className={ "l-wrapper" + this.getBackground() }>

          <h2 className="l-section__heading">{ this.getHeading() }</h2>

          { this.props.children }

        </div>
      </div>
    );
  }
  
});