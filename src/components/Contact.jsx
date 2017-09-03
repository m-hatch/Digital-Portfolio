import React from 'react';
import Section from './Section';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const Contact = React.createClass({

  getContent: function() {
    return this.props.content || {};
  },

  openForm: function(event) {
    this.props.dispatch(actions.showContactForm(true));
  },

  render: function() {
    return (
      <Section heading="Contact" bg="white">

          <div className="contact">

            <h3 className="contact__heading">{ this.getContent().heading }</h3>
            
            <p>{ this.getContent().text }</p>

            <button className="contact__button contact__btn-dialog" onClick={ this.openForm }>
              Send a message
            </button>

          </div>

      </Section>
    );
  }
  
});

export default connect()(Contact);
