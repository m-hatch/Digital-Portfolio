import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  scryRenderedComponentsWithType 
} from 'react-dom/test-utils';
import ProjectsContainer from '../../src/components/ProjectsContainer';
import Project from '../../src/components/Project';
import {expect} from 'chai';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducers';

const store = createStore(reducer);

const component = renderIntoDocument(
  <ProjectsContainer store={ store } projects={
    [
      {
        "name": "Demo",
        "img": "path.jpg",
        "img_alt": "alt desc",
        "description": "lorem ipsum",
        "github": "repository",
        "link": "website"
      },
      {
        "name": "Demo2",
        "img": "another/path.jpg",
        "img-alt": "alt desc 2",
        "description": "lorem ipsum again",
        "github": "my/repository",
        "link": "website2"
      }
    ]
  } />
);

describe('ProjectsContainer', () => {

  it('renders a list of Project components', () => {
    const projects = scryRenderedComponentsWithType(component, Project);
    expect(projects.length).to.equal(2);
  });

});