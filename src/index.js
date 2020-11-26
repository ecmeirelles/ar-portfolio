import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from "./index.css";
import { App } from "./components/App";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
