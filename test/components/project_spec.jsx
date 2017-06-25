import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import ProjectsContainer from '../../src/components/ProjectsContainer';
import Project from '../../src/components/Project';
import {expect} from 'chai';

describe('Project', () => {

  it('renders a project json into a div', () => {
    const component = renderIntoDocument(
      <Project project={
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

    //const projectName = scryRenderedDOMComponentsWithTag(component, 'h2');
    //expect(projectName.textContent).to.equal('Demo');
  });

});