import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/index.css';
import App from './app';

library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);