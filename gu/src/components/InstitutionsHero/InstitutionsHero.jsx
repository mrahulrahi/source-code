import React from 'react';
import './InstitutionsHero.css';
import guIcon from '../../assets/images/gu-logo-icon.svg';
import InstitutionsHeroForm from '../InstitutionsHeroForm/InstitutionsHeroForm';

const InstitutionsHero = ({ additionalClassName, video, ih_Heading, ih_para }) => {
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
            <InstitutionsHeroForm />
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
