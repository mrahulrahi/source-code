import React from 'react'
import './institutions.css';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import InstitutionsHero from '../../components/InstitutionsHero/InstitutionsHero';

const git = () => {
  return (
    <React.Fragment>
      <InstitutionsHero />

      <div className="content-container programs-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="heading text-center">
                <h4 className="text-uppercase"><span className="text-gold">Programs</span> Offered Under GIT</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ProgramRow />
            </div>
          </div>
        </div>
      </div>

      <div className="content-container facility-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-5 mx-auto">
              <div className="heading text-center px-md-5">
                <h2><span className="text-gold">OUR</span> FACILITIES</h2>
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