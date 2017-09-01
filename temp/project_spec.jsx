/*import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  scryRenderedComponentsWithType
} from 'react-dom/test-utils';
import Project from '../../src/components/Project';
import ProjectImage from '../../src/components/ProjectImage';
import ProjectText from '../../src/components/ProjectText';
import { expect } from 'chai';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducers';

const store = createStore(reducer);

const component = renderIntoDocument(
  <Project 
    store={ store } 
    project={
      {
        "name": "Demo",
        "img": "path.jpg",
        "img_alt": "alt desc",
        "description": "lorem ipsum",
        "github": "repository",
        "link": "website"
      }
    } />
);

describe('Project', () => {

  it('renders a ProjectImage component', () => {
    const projectImage = scryRenderedComponentsWithType(component, ProjectImage)
    expect(projectImage.length).to.equal(1);
  });

  it('renders a ProjectText component', () => {
    const projectText = scryRenderedComponentsWithType(component, ProjectText)
    expect(projectText.length).to.equal(1);
  });

});