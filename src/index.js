import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initialState,reducer} from "./data/reducer";
import {Context as ApplicationContext} from "./data/context";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContext initialState={initialState} reducer={reducer} >
      <App />
    </ApplicationContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
