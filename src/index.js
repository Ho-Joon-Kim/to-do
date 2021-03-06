import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Clock from './component/Clock.js';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);