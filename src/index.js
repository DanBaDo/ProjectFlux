import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from "./Layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
      <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
