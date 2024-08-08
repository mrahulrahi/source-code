import React from 'react'
import './InstitutionsHeroForm.css';
import captchaImg from '../../assets/images/captcha-img.png';

const InstitutionsHeroForm = () => {
  return (
    <div className="institutions-hero-form ms-xl-auto">
    <div className="row flex-column g-2">
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="Phone Number" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <select className="form-select">
            <option value="">Course</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <textarea className="form-control" placeholder="Message"></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group captcha-box d-flex align-items-center justify-content-between">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I'm not a robot
            </label>
          </div>
          <div className="captcha-img ms-auto">
            <img src={captchaImg} alt="captcha" />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="submit" className="btn-form" value="Submit & Download" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default InstitutionsHeroForm