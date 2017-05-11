
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';

it('renders NotFound component by default', () => {
  const rendered = ReactTestUtils.renderIntoDocument(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App />
    </MemoryRouter>
  );
  const el = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'not-found');
  expect(el.tagName.toLowerCase()).toEqual('div');
});

it('renders ExampleCard component on path "/card"', () => {
  const rendered = ReactTestUtils.renderIntoDocument(
    <MemoryRouter initialEntries={[ '/card' ]}>
      <App />
    </MemoryRouter>
  );
  const el = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'card');
  expect(el.tagName.toLowerCase()).toEqual('div');
});
