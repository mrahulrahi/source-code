import React from 'react';
import './af.css';

const AlumniFlag = ({ imgSrc, title, description, additionalClassName }) => {
  return (
    <React.Fragment>
      <div className={`af-container ${additionalClassName}`}>
        <div className="af-img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="alumni-text">
                <h4>{title}</h4>
                <div className="at-para">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlumniFlag;
