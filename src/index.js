import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
/* eslint-disable import/first */
import './index.css';
import 'semantic-ui-css/semantic.min.css';
/* eslint-enable import/first */

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>),
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
};
