// index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ParallaxBackground from './components/ParallaxBackground';
import Navbar from './components/Navbar/index';
import SessionOne from './components/SessionOne/index';
import SessionTwo from './components/SessionTwo/index';
import Sessionthree from './components/Sessionthree/index';
import SessionFour from './components/SessionFour/index';
import SessionFive from './components/SessionFive/index';
import styles from './pages/Inicio/inicio.module.css';
import ScrollReveal from 'scrollreveal';

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal('.SessionOne', {
      duration: 1000,
      distance: '100px',
      origin: 'bottom',
    });
    sr.reveal('.SessionTwo', { duration: 1500 });
    sr.reveal('.Sessionthree', { duration: 2000, rotate: { x: 0, y: 80, z: 0 } });
    sr.reveal('.SessionFour', {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
    });
    sr.reveal('.SessionFive', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 0,
      opacity: 0,
      scale: 0.8,
      easing: 'ease',
  });
  
  
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.container}>
                <Navbar />
                <div className={`SessionOne ${styles.SessionOne}`}>
                  <SessionOne />
                </div>
                <div className={`SessionTwo ${styles.SessionTwo}`}>
                  <SessionTwo />
                </div>
                <div className={`Sessionthree ${styles.Sessionthree}`}>
                  <Sessionthree />
                </div>
                <div className={`SessionFive ${styles.SessionFive}`}>
                  <SessionFive />
                </div>
                <div className={`SessionFour ${styles.SessionFour}`}>
                  <SessionFour />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <ParallaxBackground />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
