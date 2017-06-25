import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// pure JS DOM implementation
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// hoist jsdom window objects
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// enable chai
chai.use(chaiImmutable);