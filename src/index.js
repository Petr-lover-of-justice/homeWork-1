import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './tutorial-4/App';

import { StrictMode } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
