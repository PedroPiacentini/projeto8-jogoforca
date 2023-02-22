import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/style.css"
import "./styles/reset.css"

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
