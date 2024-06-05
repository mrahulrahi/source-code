import React from 'react';
import './ih.css';

const Innerhero = ({ backgroundImage, title }) => {
  return (
    <React.Fragment>
      <div className="innerhero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Innerhero;
