import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import Project from '../../src/components/Project';

describe('Project', () => {

  it('renders a project json into a div', () => {
    const component = renderIntoDocument(
      <Project json={
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
  });

});