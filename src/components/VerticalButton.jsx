import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="vertical-button">
        <button className="vertical-button__btn">
          { this.props.label }
        </button>
        <div className="vertical-button__stroke"></div>
      </div>
    );
  }
  
});