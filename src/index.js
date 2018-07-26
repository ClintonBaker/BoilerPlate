import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './styles/index.styl';
import { store } from './store';
require('./types');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('app')
);
