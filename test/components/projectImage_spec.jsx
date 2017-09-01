import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-dom/test-utils';
import ProjectImage from '../../src/components/ProjectImage';
import {expect} from 'chai';

const component = renderIntoDocument(
  <ProjectImage
    img="image.jpg"
    imgAlt="alt"
    link="weblink.com" />
);

describe('ProjectImage', () => {

  it('returns an image path', () => {
    const imgTag = findRenderedDOMComponentWithTag(component, 'img');
    expect(imgTag.getAttribute('src')).to.equal('img/image.jpg');
  });

  it('returns image alt text', () => {
    const imgAlt = findRenderedDOMComponentWithTag(component, 'img');
    expect(imgAlt.getAttribute('alt')).to.equal('alt');
  });

  it('returns a web URL', () => {
    const imgLink = findRenderedDOMComponentWithTag(component, 'a');
    expect(imgLink.getAttribute('href')).to.equal('weblink.com');
  });

});