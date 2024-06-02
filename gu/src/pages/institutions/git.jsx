import React from 'react'
import './institutions.css';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';

const git = () => {
  return (
    <React.Fragment>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="heading text-center">
              <h3><span className="text-gold">OUR</span> FACILITIES</h3>
              <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              </div>
       
            </div>
          </div>
        </div>
        <FacilityGrid />
      </div>


    </React.Fragment>
  )
}

export default git