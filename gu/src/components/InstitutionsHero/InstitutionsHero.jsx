import React from 'react';
import './InstitutionsHero.css';
import guIcon from '../../assets/images/gu-logo-icon.svg';
import captchaImg from '../../assets/images/captcha-img.png';

const InstitutionsHero = ({ additionalClassName, video, ih_Heading, ih_para  }) => {
  return (
    <div className="institutions-hero-container relative add-index">
      <div className={`institutions-hero-bg ${additionalClassName}`}>
          <video src={video} autoPlay loop muted playsInline></video>
      </div>
      <div className="container add-index">
        <div className="row">
          <div className="col-lg-8 col-xl-6">
            <div className="institutions-hero-content ms-xl-auto pe-xl-5">
              <h1>{ih_Heading}</h1>
              <p>{ih_para}</p>
            </div>
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
          </div>
        </div>
      </div>
      <div className="ih-text-carousel">
        <div className="text-carousel-content text-carousel-parent textScroll">
          <div className="text-carousel-wrapper">
            <div className="text-carousel-list all-text-list">
              {["ADMISSION OPEN", "Git", "ADMISSION OPEN", "Git", "ADMISSION OPEN", "Git"].map((text, index) => (
                <div key={index} className="text-carousel-item text-child">
                  <div className="text-carousel-box">
                    {text}
                    <div className="text-carousel-icon">
                      <img src={guIcon} alt="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-carousel-list all-text-list">
              {["ADMISSION OPEN", "Git", "ADMISSION OPEN", "Git", "ADMISSION OPEN", "Git"].map((text, index) => (
                <div key={index} className="text-carousel-item text-child">
                  <div className="text-carousel-box">
                    {text}
                    <div className="text-carousel-icon">
                      <img src={guIcon} alt="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsHero;
