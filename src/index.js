// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import ParallaxBackground from './components/ParallaxBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <AppRoutes />
      <ParallaxBackground />
    </div>
  </React.StrictMode>
);
