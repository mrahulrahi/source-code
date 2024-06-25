import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import sttBorder from '../../assets/images/stt-border-icon.svg';
import sttArrow from '../../assets/images/stt-arrow-icon.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="#"
      className={`scroll-to-top-btn d-flex align-items-center justify-content-center ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <div className="stt-border-icon"><img src={sttBorder} alt="Scroll to Top Border" /></div>
      <div className="stt-arrow-icon"><img src={sttArrow} alt="Scroll to Top Arrow" /></div>
    </a>
  );
};

export default ScrollToTop;
