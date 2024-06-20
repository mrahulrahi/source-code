import React from 'react'
import './ScrollToTop.css'
import scrollToTop from '../../assets/images/scroll-to-top-icon.svg'

const ScrollToTop = () => {
  return (
    <div className="scroll-to-top-wrapper">
        <div className="stt-icon">
            <img src={scrollToTop} alt="" />
        </div>
    </div>
  )
}

export default ScrollToTop