import React from 'react'
import './ScrollToTop.css'
import sttBorder from '../../assets/images/stt-border-icon.svg'
import sttArrow from '../../assets/images/stt-arrow-icon.svg'

const ScrollToTop = () => {
  return (
    <a href="#" className="scroll-to-top-btn d-flex align-items-center justify-content-center">
        <div className="stt-border-icon"><img src={sttBorder} alt="" /></div>
        <div className="stt-arrow-icon"><img src={sttArrow} alt="" /></div>
    </a>
  )
}

export default ScrollToTop