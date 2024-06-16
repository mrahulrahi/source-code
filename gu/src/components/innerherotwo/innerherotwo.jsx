import React from 'react';
import './innerherotwo.css';

const Innerherotwo = ({ backgroundImage, title }) => {
  return (
    <div className="innerherotwo" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innerherotwo;
