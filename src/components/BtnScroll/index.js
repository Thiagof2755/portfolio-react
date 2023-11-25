import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnScroll.module.css';
import BtnIng from './img/down-arrow.png';

const BtnScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToVisibleAreaEnd = () => {
    const windowHeight = window.innerHeight;
    const scrollYStart = window.scrollY;
    const scrollStep = 5; // Ajuste a velocidade aqui

    const scrollDown = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < scrollYStart + windowHeight) {
        window.scrollTo(0, currentScroll + scrollStep);
        requestAnimationFrame(scrollDown);
      }
    };

    requestAnimationFrame(scrollDown);
  };

  return (
    isVisible && (
      <div className={styles.btnContainer} onClick={scrollToVisibleAreaEnd}>
        <img src={BtnIng} alt="Scroll to End of Visible Area" className={styles.btn} />
      </div>
    )
  );
};
export default BtnScroll;
