import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.setFullSize = this.setFullSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  getLinks() {
    const links =  this.props.links ;
    
    return links.map(link => {
      return (
        <li className="footer__list-item" key={ link.name }>
          <a className="footer__link" href={ link.url } target="_blank">{ link.name }</a>
        </li>
      )
    });
  }

  handleWheel(event) {
    // shrink footer on down scroll, show full size on up scroll
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setFullSize(false) : this.setFullSize(true);
  }

  handleHover(mouseEvent) {
    this.setFullSize(true);
  }

  setFullSize(status) {
    this.props.showFooterFullSize(status);
  }

  render() {
    return (
      <footer className={"footer l-font-smoothing" + (!this.props.showFullSize ? " footer--small" : "")} 
        onMouseEnter={ this.handleHover }>

        <div className="l-wrapper">

          <span className="footer__title">Links:</span>
          <ul className="footer__list">
            { this.getLinks() }
          </ul>

        </div>

      </footer>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    showFullSize: state.footer.fullSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFooterFullSize: (status) => {
      dispatch(actions.showFooterFullSize(status));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
