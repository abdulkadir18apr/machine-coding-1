import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { HabitProvider } from './context/HabitContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HabitProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </HabitProvider>
  </React.StrictMode>
);


reportWebVitals();
