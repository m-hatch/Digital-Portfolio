import React from 'react';
import Section from './Section';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getContent() {
    return this.props.content || {};
  }

  handleClick(event) {
    this.props.openForm();
  }

  render() {
    return (
      <Section heading="Contact" bg="white">

          <div className="contact">

            <h3 className="contact__heading">{ this.getContent().heading }</h3>
            
            <p>{ this.getContent().text }</p>

            <button className="contact__button contact__btn-dialog" onClick={ this.handleClick }>
              Send a message
            </button>

          </div>

      </Section>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    openForm: () => {
      dispatch(actions.showContactForm(true));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Contact);