import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag,
  scryRenderedComponentsWithType
} from 'react-dom/test-utils';
import ProjectText from '../../src/components/ProjectText';
import VerticalButton from '../../src/components/VerticalButton';
import {expect} from 'chai';

const handleClick = (event) => { console.log(event); }

const component = renderIntoDocument(
  <ProjectText
    projectName="MyProject" 
    tagline="Here is some short text..." 
    description="<p>This is HTML content</p>"
    github="github.link.com"
    webLink="web.link.com" 
    openModal={ handleClick } />
);

describe('ProjectText', () => {

  it('returns the project name', () => {
    const name = findRenderedDOMComponentWithClass(component, 'project__heading');
    expect(name.textContent).to.equal('MyProject');
  });

  it('returns a short tagline text', () => {
    const tagline = findRenderedDOMComponentWithClass(component, 'project__tagline');
    expect(tagline.textContent).to.equal('Here is some short text...');
  });

  it('returns a github URL', () => {
    const links = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(links[0].getAttribute('href')).to.equal('github.link.com');
  });

  it('returns a web URL', () => {
    const links = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(links[1].getAttribute('href')).to.equal('web.link.com');
  });

  it('renders a VerticalButton component', () => {
    const button = scryRenderedComponentsWithType(component, VerticalButton);
    expect(button.length).to.equal(1);
  });

  it('opens modal on button click');

});