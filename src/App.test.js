import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * NOTE: No "real" tests here yet, as all the App does is render a single, dumb
 * component.
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
