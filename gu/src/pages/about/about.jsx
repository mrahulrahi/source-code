import React from 'react';
import './about.css';
import Specializations from '../../components/Specializations/specializations';
import InnerHeroBg from '../../assets/images/inner-img-11.jpg';
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <React.Fragment>

       <div className="innerherotwo2 admission-inner-hero bottom-shadow" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
          <div className="container hero-container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>‘A school with mind, <br /> heart, and a constant fizz!’</h1>
                <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                <Link to='/' className="btn btn-default">Apply Now</Link>
              </div>
            </div>
          </div>
       </div>

       <div className="content-container pb-0">
          <Specializations />
       </div>

    </React.Fragment>
  )
}

export default about