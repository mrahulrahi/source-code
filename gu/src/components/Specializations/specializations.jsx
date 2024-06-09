import React from 'react';
import './sp.css';
import nirfcl from '../../assets/images/nirf-cl-icon.svg';
import arll from '../../assets/images/arll-cl-icon.svg';
import ieee from '../../assets/images/ieee-cl-icon.svg';
import gsirf from '../../assets/images/gsirf-cl-icon.svg';
import iic from '../../assets/images/iic-icon.png';
import spborder from '../../assets/images/sp-border.svg';

const data = [
  { id: 1, img: nirfcl, name: "All India TOP", para: "200 University Ranking" },
  { id: 2, img: arll, name: "Ranked Among Top 50", para: "Private Universities in India By Ministry ofEducation for Innovation Achievements under ARIIA." },
  { id: 3, img: ieee, name: "Awarded as the Best", para: "University in Placements (By ASSOCHAM)" },
  { id: 4, img: gsirf, name: "Rated 4/5 Stars", para: "Among Top Engineering Institutes By GSIRF Government of Gujarat" },
  { id: 5, img: iic, name: "Annual performance", para: "in University Category awarded by Ministryof Education Govt. of India" }
];

const Specializations = () => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="specialization-heading">
                <h4>Engineering Specializations Aligned</h4>
                <p>The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home.</p>
              </div>
              <ul className='sp-list'>
                {data.map((item) => (
                  <li className='sp-item' key={item.id}>
                    <div className="sp-box" style={{ backgroundImage: `url(${spborder})` }}>
                      <div className="sp-img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="sp-text">
                        <h4>{item.name} <span>{item.para}</span></h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Specializations;
