import React from 'react';

class Typewriter extends React.Component {

  constructor(props) {
    super(props);
    this.typewriter = this.typewriter.bind(this);
  }

  componentDidMount() {
    this.typewriter();
    this.intervalId = window.setInterval(this.typewriter, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  typewriter() {
    const spanList = document.getElementsByClassName('type');

    if (this.props.isVisible) {
      this.clearType(spanList);

      for (let i = 0; i < spanList.length; i++) {
        (function(i) {
          setTimeout(() => { 
            spanList[i].classList.add('type--active'); 
          }, 100 * i);
        })(i);
      }
    }
  }

  clearType(spanList) {
    for (var i = 0; i < spanList.length; i++) {
      spanList[i].classList.remove('type--active');
    }
  }

  getTypeText() {
    const text = this.props.text;
    const textHtml = text.split('').map(function(char){
      let html;

      if (char === ' ') { 
        html = '<span class="type type--active">&nbsp;</span>';
      } else if (char === '/') { 
        html = '<span class="type type__break type--active"></span>';
      } else { 
        html = '<span class="type type--active">'+char+'</span>';
      }

      return html;
    });

    return textHtml.join('').toString() + '<span class="typewriter__cursor"></span>';
  }

  render() {
    return (
      <p className="typewriter"
        dangerouslySetInnerHTML={{ __html: this.getTypeText() }}>
      </p>
    );
  }

}

export default Typewriter;
