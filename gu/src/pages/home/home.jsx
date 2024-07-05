import React from 'react';
import './home.css';
import Innerhero from '../../components/innerhero/innerhero';
import inner1 from '../../assets/images/inner-img-1.jpg';
import InstitutionsGrid from '../../components/InstitutionsGrid/InstitutionsGrid';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import PartnerGrid from '../../components/PartnerGrid/PartnerGrid';
import Recruiters from '../../components/recruiters/recruiters';
import Specializations from '../../components/Specializations/specializations';
import Heading from '../../components/heading/heading';
import InfoCompany from '../../components/InfoCompany/InfoCompany';

import ifIcon1 from '../../assets/images/institute-feature-icon-1.svg';
import ifIcon2 from '../../assets/images/institute-feature-icon-2.svg';
import ifIcon3 from '../../assets/images/institute-feature-icon-3.svg';
import ifIcon4 from '../../assets/images/institute-feature-icon-4.svg';
import ifIcon5 from '../../assets/images/institute-feature-icon-5.svg';
import Testimonials from '../../components/Testimonials/Testimonials';


const home = () => {
  return (
    <React.Fragment>
      <div className="blue-linear">
        <Innerhero backgroundImage={inner1} title="Institution’s Innovation Council" />

        <InstitutionsGrid />
        <div className="institute-feature-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="institute-feature-list">
                  <div className="institute-feature-item">
                    <div className="institute-feature-img">  <img src={ifIcon1} alt="" />  </div>
                    <div className="institute-feature-text">
                      <h4> Best Quality Infrastructure & Digital Resources </h4>
                    </div>
                  </div>
                  <div className="institute-feature-item">
                    <div className="institute-feature-img">  <img src={ifIcon2} alt="" />  </div>
                    <div className="institute-feature-text">
                      <h4> Quality in Teaching & Student Development </h4>
                    </div>
                  </div>
                  <div className="institute-feature-item">
                    <div className="institute-feature-img">  <img src={ifIcon3} alt="" />  </div>
                    <div className="institute-feature-text">
                      <h4> Relevant Curriculum on a Local, National & Global Levels </h4>
                    </div>
                  </div>
                  <div className="institute-feature-item">
                    <div className="institute-feature-img">  <img src={ifIcon4} alt="" />  </div>
                    <div className="institute-feature-text">
                      <h4> Highest academic degree value upon Graduation </h4>
                    </div>
                  </div>
                  <div className="institute-feature-item">
                    <div className="institute-feature-img">  <img src={ifIcon5} alt="" />  </div>
                    <div className="institute-feature-text">
                      <h4> Top quality research and innovation Initiatives </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-container p-0 bg-white">
          <Specializations />
        </div>

        <div className="content-container home-facility-container blue-transparent">
          <Heading sheading="OUR" shheading="FACILITIES" spara=" The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home." />
          <FacilityGrid />
        </div>
        <PartnerGrid className="blue-transparent" />
        <Recruiters className="home-recruiters-container blue-transparent" />
        <div className="content-container bg-transparent">
          <InfoCompany />
        </div>
        <div className="placement-overview-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 text-center mx-auto">
                <h5>PLACEMENT OVERVIEW - 2022</h5>
                <div className="po-list d-flex flex-wrap align-items-center justify-content-between">
                  <div className="po-item">
                    <div className="po-box w-100 h-100">
                      <span>92%</span>
                      OF STUDENTS PLACED IN LAST 3 YEARS
                    </div>
                  </div>
                  <div className="po-item">
                    <div className="po-box w-100 h-100">
                      <span>15</span>
                      ACTIVE MOUS WITH COMPANIES
                    </div>
                  </div>
                  <div className="po-item">
                    <div className="po-box w-100 h-100">
                      <span>10 LAC</span>
                      HIGHEST PACKAGE PER ANNUM
                    </div>
                  </div>
                  <div className="po-item">
                    <div className="po-box w-100 h-100">
                      <span>125+</span>
                      COMPANIES VISITED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />

      </div>
    </React.Fragment>
  )
}

export default home