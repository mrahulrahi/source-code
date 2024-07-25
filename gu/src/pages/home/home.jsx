import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Heading from '../../components/heading/heading';
import InstitutionsGrid from '../../components/InstitutionsGrid/InstitutionsGrid';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import PartnerGrid from '../../components/PartnerGrid/PartnerGrid';
import Recruiters from '../../components/recruiters/recruiters';
import Specializations from '../../components/Specializations/specializations';
import InfoCompany from '../../components/InfoCompany/InfoCompany';
import Testimonials from '../../components/Testimonials/Testimonials';

import ifIcon1 from '../../assets/images/institute-feature-icon-1.svg';
import ifIcon2 from '../../assets/images/institute-feature-icon-2.svg';
import ifIcon3 from '../../assets/images/institute-feature-icon-3.svg';
import ifIcon4 from '../../assets/images/institute-feature-icon-4.svg';
import ifIcon5 from '../../assets/images/institute-feature-icon-5.svg';
import homeAboutImg from '../../assets/images/flying-drone-img.png';
import homeAboutBg from '../../assets/images/home-about-bg.svg';
import homeEventBg from '../../assets/images/home-event-bg.jpg';
import homeEventBgMob from '../../assets/images/home-event-bg-mob.jpg';

import hecIcon1 from '../../assets/images/Inco1.svg';
import hecIcon2 from '../../assets/images/Inco2.svg';
import hecIcon3 from '../../assets/images/Inco3.svg';
import hecIcon4 from '../../assets/images/Inco4.svg';
import hecIcon5 from '../../assets/images/Inco5.svg';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

import ev1 from '../../assets/images/event-img-1.png';
import ev2 from '../../assets/images/event-img-2.png';
import ev3 from '../../assets/images/event-img-3.png';
import evVideo from '../../assets/video/add-video.mp4';
import heroVideo from '../../assets/video/hero-video.mp4';

import heroicon1 from '../../assets/images/hero-svg1.svg';
import heroicon2 from '../../assets/images/hero-svg2.svg';
import captchaImg from '../../assets/images/captcha-img.png';
import frombg from '../../assets/images/frombg.png';
import urimg from '../../assets/images/uer-img.jpg';

import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <React.Fragment>
      <div className="blue-linear overflow-hidden">
        <FloatingButton />

        <div className="main-hero">
          <div className="hero-video"> <video src={heroVideo} autoPlay loop muted playsInline></video> </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <div className="main-hero-text">
                  <h1> Asia’s first <br /> <span> AI Enabled </span>  <br /> Campus</h1>
                  <p> creating an enabling environment of active learning and become a centre of excellence. </p>
                </div>
                <div className="main-hero-icon">
                  <img src={heroicon2} alt="" />
                </div>
                <div className="main-hero-left">
                  <img src={heroicon1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="event-lable">
          <div className="event-hero-video"> <video src={evVideo} autoPlay loop muted playsInline></video> </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <ul className="event-lable-list">
                  <li className="event-lable-item">
                    <img src={ev1} alt="" />
                  </li>
                  <li className="event-lable-item">
                    <img src={ev2} alt="" />
                  </li>
                  <li className="event-lable-item">
                    <img src={ev3} alt="" />
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <InstitutionsGrid />
        <div className="institute-feature-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
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

        <div className="home-about-container relative overflow-hidden">
          <div className="home-about-bg"><img src={homeAboutBg} alt="" /></div>
          <div className="container add-index">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap">
                  <div className="home-about-content">
                    <h2><span>GANDHINAGAR</span> UNIVERSITY</h2>
                    <p>The responsibility and power of a university is to create an enabling environment of active learning and become a centre of excellence that develops visionary leaders and passionate professionals who contribute to the community and the country. It is a endeavour that demands the courage and commitment to pursue the dream with energy and effort. Gandhinagar University is an institution of the future, holistic in its approach and determined on the use of technology to provide the best inputs for the students to achieve their potential and beyond.</p>
                    <Link to="#!" className="btn btn-outline">Learn More</Link>
                  </div>
                  <div className="home-about-img d-flex align-items-center justify-content-center">
                    <img src={homeAboutImg} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-event-container relative">
          <div className="home-event-bg"><img className="d-none d-xl-block" src={homeEventBg} alt="" /><img className="d-xl-none" src={homeEventBgMob} alt="" /></div>
          <div className="container add-index">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex flex-column">
                  <div className="home-event-head text-center mx-auto">
                    <h2>WHAT MAKES US <span>BETTER?</span></h2>
                    <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                  </div>
                  <div className="home-event-content">
                    <div className="row g-5">
                      <div className="col-md-6">
                        <div className="home-event-left">
                          <div className="he-head">
                            <h4>GU TeCHNO EVENT</h4>
                            <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                          </div>
                          <div className="he-row d-flex flex-wrap">
                            <div className="he-item">
                              <div className="he-box d-flex flex-column w-100 h-100">
                                <h5>1st</h5>
                                <p>Youngest University To receive NAAC A++ In first cycle</p>
                              </div>
                            </div>
                            <div className="he-item">
                              <div className="he-box d-flex flex-column w-100 h-100">
                                <h5>2%</h5>
                                <p>Among the top 2% Universities in the Nation To Have NAAC A++ Grade</p>
                              </div>
                            </div>
                          </div>
                          <div className="he-row d-flex flex-wrap">
                            <div className="he-item">
                              <div className="he-box d-flex flex-column w-100 h-100">
                                <h5>Top 5</h5>
                                <p>Among the top 5 Universities of Gujarat To Receive the Highest NAAC Grade</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="home-event-right">
                          <div className="he-head">
                            <h4>GU TeCHNO EVENT</h4>
                            <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                          </div>
                          <div className="he-card-list d-flex flex-wrap justify-content-center">
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                                <div className="he-card-icon"><img src={hecIcon1} alt="" /></div>
                                <p className="mt-auto">Best Quality Infrastructure & Digital Resources</p>
                              </div>
                            </div>
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                                <div className="he-card-icon"><img src={hecIcon2} alt="" /></div>
                                <p className="mt-auto">Relevant Curriculum on a Local, National & Global Levels</p>
                              </div>
                            </div>
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                                <div className="he-card-icon"><img src={hecIcon3} alt="" /></div>
                                <p className="mt-auto">Highest academic degree value upon Graduation</p>
                              </div>
                            </div>
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                                <div className="he-card-icon"><img src={hecIcon4} alt="" /></div>
                                <p className="mt-auto">Top quality research and innovation Initiatives</p>
                              </div>
                            </div>
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                                <div className="he-card-icon"><img src={hecIcon5} alt="" /></div>
                                <p className="mt-auto">Best Quality Infrastructure & Digital Resources</p>
                              </div>
                            </div>
                            <div className="he-card-item">
                              <div className="he-card-box d-flex flex-column w-100 h-100">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

        <div className="content-container home-facility-container">
          <Heading sheading="OUR" shheading="FACILITIES" spara=" The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home." />
          <FacilityGrid />
        </div>

        <PartnerGrid className="home-partners-container" />
        <Recruiters className="home-recruiters-container" />

        <div className="home-placement-container content-container ">
          <InfoCompany />
        </div>
        <VisibilitySensor onChange={onVisibilityChange}>
          <div className="placement-overview-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 text-center mx-auto">
                  <h5>PLACEMENT OVERVIEW - 2022</h5>
                  <div className="po-list d-flex flex-wrap align-items-center justify-content-between">
                    <div className="po-item">
                      <div className="po-box w-100 h-100">
                        <CountUp start={0} end={92} duration={2} decimals={0} suffix="%">
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        OF STUDENTS PLACED IN LAST 3 YEARS
                      </div>
                    </div>
                    <div className="po-item">
                      <div className="po-box w-100 h-100">
                        <CountUp start={0} end={92} duration={2} decimals={0}>
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        ACTIVE MOUS WITH COMPANIES
                      </div>
                    </div>
                    <div className="po-item">
                      <div className="po-box w-100 h-100">
                        <CountUp start={0} end={92} duration={2} decimals={0} separator=" " suffix="LAC">
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        HIGHEST PACKAGE PER ANNUM
                      </div>
                    </div>
                    <div className="po-item">
                      <div className="po-box w-100 h-100">
                        <CountUp start={0} end={92} duration={2} decimals={0} suffix="+">
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        COMPANIES VISITED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VisibilitySensor>

        <Testimonials />

        <div className="content-container gray text-blue p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="upcoming-event">
                  <div className="ue-left">
                    <div className="ue-text">
                      <h4> EVENTS </h4>
                      <h5> UPCOMING </h5>
                      <div className="ue-box">
                        <div className="uel">
                          07
                        </div>
                        <div className="uer">
                          <h3> Mar </h3>
                          <h2> 10:20 AM</h2>
                        </div>
                      </div>
                      <div className="uerb">
                        <h4> GU TeCHNO EVENT </h4>
                        <p> The campus provides a refreshing environment with different facilities which makes our students feel at home. </p>
                        <div className="uerb-btn">
                          <Link to='/activities'> Explore More </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ue-right">
                    <div className="uer-box">
                      <div className="uer-img"> <img src={urimg} alt="" /> </div>
                      <div className="uer-text">
                        <div className="ut-box">
                          <h4> 21 </h4>
                          <p>sep</p>
                        </div>
                        <h5> JAZBA </h5>
                        <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                      </div>
                    </div>
                    <div className="uer-box">
                      <div className="uer-img"> <img src={urimg} alt="" /> </div>
                      <div className="uer-text">
                        <div className="ut-box">
                          <h4> 21 </h4>
                          <p>sep</p>
                        </div>
                        <h5> JAZBA </h5>
                        <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-container text-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <div className="form-box">
                  <div className="form-left">
                    <div className="from-heading">
                      <h5> A Step Towards Your </h5>
                      <h3> FUTURE </h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control type2" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-group">
                          <input type="email" className="form-control type2" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-group type2">
                          <input type="tel" className="form-control type2" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-group">
                          <textarea className="form-control type2" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-group captcha-box d-flex align-items-center justify-content-between type2 mt-0">
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
                      <div className="col-sm-12">
                        <div className="form-group ">
                          <input type="submit" className="btn-form" value="Submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="from-img">
                      <img src={frombg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default home