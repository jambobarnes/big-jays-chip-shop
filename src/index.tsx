import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import BasketProvider from './context/basketContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
