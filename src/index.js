import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import './index.css';

ReactDOM.render(
  <div>
  <App />
  <Clock/>,
  <Toggle/>,
  </div>,
  document.getElementById('root')
);
