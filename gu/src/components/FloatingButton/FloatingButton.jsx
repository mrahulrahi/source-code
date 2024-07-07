import React from 'react'
import './FloatingButton.css'
import { Link } from 'react-router-dom'

const FloatingButton = () => {
  return (
    <div className="floating-button-wrapper d-flex flex-column">
      <Link to="#!" className="floating-btn">Admission</Link>
      <Link to="#!" className="floating-btn">Virtual Tour</Link>
    </div>
  )
}

export default FloatingButton