import React from 'react';
import './iqac.css';
import inner4 from '../../assets/images/inner-img-4.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const IQAC = () => {
  return (
    <React.Fragment>
      <Innerhero backgroundImage={inner4} title="The Internal Quality Assurance Cell" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="iqac-head text-center">
                <div>
                  <h4>The Internal Quality Assurance Cell</h4>
                  <p>The Internal Quality Assurance Cell (IQAC) was established in 2019 at Gandhinagar University (GU) with the focus to make the quality the defining element at GU. The IQAC ensures the effective implementation of quality initiatives through a combination of self and external quality evaluation, promotion, and sustenance initiatives. The IQAC strives for excellence in all of the university’s academic and administrative activities. For the functions of IQAC cell refer the IQAC policy.</p>
                </div>

                <div className="iqac-btn-wrap"><a href="#!" className="btn btn-gold-outline">IQAC Policy</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <h4>Objectives</h4>
              <ul>
                <li>To ensure continuous improvement in the entire operations of the University.</li>
                <li>To develop a quality system for conscious, consistent and programmed action to improve the academic and administrative performance of the University.</li>
                <li>To promote measures for driving university's functioning towards quality enhancement and institutionalization of best practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default IQAC; 
