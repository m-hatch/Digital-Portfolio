import React from 'react';

export default React.createClass({
  
  render: function() {
    return (
      <div className="l-container">
        { this.props.children }
      </div>
    );
  }
  
});