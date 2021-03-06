import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Clock from './component/Clock.js';
import Todo from './component/Todo.js';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);