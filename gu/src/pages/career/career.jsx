import React from 'react';
import './career.css';
import inner6 from '../../assets/images/inner-img-6.jpg';
import Innerhero from '../../components/innerhero/innerhero';
import careers from '../../data/career.json'
import CareerCard from '../../components/CareerCard/CareerCard';

const career = () => {
  return (
    <React.Fragment>

      <Innerhero backgroundImage={inner6} title="CAREER" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="career-head text-center">
                <h4 className="uppercase"><span className="text-gold">Career At</span> GU</h4>
                <p>The Internal Quality Assurance Cell (IQAC) was established in 2019 at Gandhinagar University (GU) with the focus to make the quality the defining element at GU. The IQAC ensures the effective implementation of quality initiatives through a combination of self and external quality evaluation, promotion, and sustenance initiatives. The IQAC strives for excellence in all of the university’s academic and administrative activities. For the functions of IQAC cell refer the IQAC policy.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="career-list flex flex-wrap">
                {careers.map((career) => (
                  <div key={career.id} className="career-item">
                   <CareerCard career={career} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default career