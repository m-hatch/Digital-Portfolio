import React from 'react';

export default React.createClass({

  getTypeText: function() {
    const text = this.props.text;

    const textHtml = text.split('').map(function(char){
      let html;

      if (char === ' ') { 
        html = '<span class="type">&nbsp;</span>';
      } else if (char === '/') { 
        html = '<span class="type__break type"></span>';
      } else { 
        html = '<span class="type">'+char+'</span>';
      }

      return html;
    });

    return textHtml.join('').toString() + '<span class="typewriter__cursor"></span>';
  },

  typewriter: function() {
    const spanList = document.getElementsByClassName('type');

    if (this.props.isVisible) {
      this.clearType(spanList);

      for (var i = 0; i < spanList.length; i++) {
        (function(i) {
          setTimeout(function() { 
            spanList[i].classList.add('type--active'); 
          }, 100 * i);
        })(i);
      }
    }
  },

  clearType: function(spanList) {
    for (var i = 0; i < spanList.length; i++) {
      spanList[i].classList.remove('type--active');
    }
  },

  componentDidMount: function() {
    this.typewriter();
    window.setInterval(this.typewriter, 5000);
  },

  componentWillUnmount: function() {
    window.clearInterval(this.typewriter);
  },

  render: function() {
    return (
      <p className="typewriter"
        dangerouslySetInnerHTML={{ __html: this.getTypeText() }}>
      </p>
    );
  }

});