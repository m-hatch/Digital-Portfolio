import React from 'react';

export default React.createClass({
  
  render: function() {
    return (
      <div className="project__image">
        <a href=""> {/* this will open modal */}
          <img className="project__img" 
	          src={ 'img/' + this.props.img } 
	          alt={ this.props.imgAlt } />
        </a>
      </div>
    );
  }

});