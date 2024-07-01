import React, { useState } from "react";

import './campusfacility.css';
import InnerHeroBg from '../../assets/images/inner-img-15.png';
import {Link} from 'react-router-dom';
import img2 from '../../assets/images/facility-img-2.jpg';
import img3 from '../../assets/images/campus-img-1.jpg';
import img4 from '../../assets/images/campus-img-2.jpg';
import letterR from '../../assets/images/r-letter-img.png';
import campusBoxImg from '../../assets/images/box-img.png';
import campusbg from '../../assets/images/campus-box-bg.png';
import bus from '../../assets/images/bus-icon.png';
import bed from '../../assets/images/bed-icon.png';
import bedicon from '../../assets/images/bad-svg.svg';
import busicon from '../../assets/images/bus-svg.svg';
import transportation from '../../assets/images/transportation-svg.svg'; 
import wifiicon from '../../assets/images/wifi-icon.svg';
import moblieicon from '../../assets/images/moblie-icon.svg';
import cupicon from '../../assets/images/cup-icon.svg';
import penicon from '../../assets/images/pen-icon.svg';
import coloricon from '../../assets/images/color-icon.svg';
import chairicon from '../../assets/images/chair-icon.png';
import basketicon from '../../assets/images/basket-icon.png';
import coloricon2 from '../../assets/images/color-icon.png';
import cmapusbg2 from '../../assets/images/campus-box-img.png';
import whiteleft from '../../assets/images/white-arrow-right.svg';
import robotImg1 from '../../assets/images/robo1.png';
import robotImg2 from '../../assets/images/robo2.png';
import robotImg3 from '../../assets/images/robo3.png';

import checkicon from '../../assets/images/check-icon.svg';
import bookicon from '../../assets/images/book-icon.svg';
import clockicon from '../../assets/images/clock-icon.svg';

const HoverCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(1); 

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1); 
    };
    return (
        <div className="main-card-list">
        <div  className="main-card-item" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
          <div className={`mci-box first ${hoveredIndex === 0 ? "hovered" : ""}`}>
            <div className="mci-icon">
              <img src={checkicon} alt="Check icon" />
            </div>
            <h4>Library Membership</h4>
            <h3>Lending of Documents</h3>
            <div className="mci-list">
              <div className="mci-item">
                <h4>DOCUMENTS</h4>
                <div className="mi-list">
                  <div className="mi-item">Books</div>
                  <div className="mi-item">Reference Books</div>
                  <div className="mi-item">Magazines/Journals</div>
                  <div className="mi-item">Journals Back Volumes</div>
                  <div className="mi-item">CDs/DVDs</div>
                </div>
              </div>
              <div className="mci-item">
                <h4>DURATION</h4>
                <div className="mi-list">
                  <div className="mi-item">15 Days</div>
                  <div className="mi-item">Overnight</div>
                  <div className="mi-item">Not to be issued</div>
                  <div className="mi-item">8 Days</div>
                  <div className="mi-item">14 Days</div>
                </div>
              </div>
              <div className="mci-item">
                <h4>STAFF</h4>
                <div className="mi-list">
                  <div className="mi-item">6 months</div>
                </div>
              </div>
            </div>
            <h2>Privileges as shown below</h2>
            <ul className="pl-list">
              <li className='pl-item'>
                <div className="pl-lable">
                  <div className="pl-left">Member</div>
                  <div className="pl-right">Document</div>
                </div>
                <div className="pl-box">
                  <h6>U.G Students</h6> <span>3</span>
                </div>
              </li>
              <li className='pl-item'>
                <div className="pl-lable">
                  <div className="pl-left">Member</div>
                  <div className="pl-right">Document</div>
                </div>
                <div className="pl-box">
                  <h6>P.G Students</h6> <span>5</span>
                </div>
              </li>
              <li className='pl-item'>
                <div className="pl-lable">
                  <div className="pl-left">Member</div>
                  <div className="pl-right">Document</div>
                </div>
                <div className="pl-box">
                  <h6>Faculty</h6> <span>10</span>
                </div>
              </li>
              <li className='pl-item'>
                <div className="pl-lable">
                  <div className="pl-left">Member</div>
                  <div className="pl-right">Document</div>
                </div>
                <div className="pl-box">
                  <h6>Staff</h6> <span>6</span>
                </div>
              </li>
            </ul>
            <div className="mcib-img">
              <img src={robotImg1} alt="Robot" />
            </div>
          </div>
        </div>
        <div className="main-card-item" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
          <div className={`mci-box second ${hoveredIndex === 1 || (hoveredIndex === -1 && hoveredIndex === 1) ? "hovered" : hoveredIndex === -1 && "hovered"}`}>
            <div className="mci-icon">
              <img src={bookicon} alt="Book icon" />
            </div>
            <h4>Resource Center</h4>
            <p>
              The campus provides a refreshing environment with different
              facilities which makes our students feel at home.
            </p>
            <ul className="mmp-list">
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>4551</h6>
                <p>Book Titles</p>
              </li>
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>29900</h6>
                <p>Book Volumes</p>
              </li>
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>45</h6>
                <p>Journals</p>
              </li>
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>150</h6>
                <p>Magazines</p>
              </li>
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>10</h6>
                <p>Newspapers</p>
              </li>
              <li className='mmp-item'>
                <img src={bookicon} alt="Book icon" />
                <h6>1200</h6>
                <p>Library Members</p>
              </li>
            </ul>
            <div className="mcib-img">
              <img src={robotImg2} alt="Robot" />
            </div>
          </div>
        </div>
        <div className="main-card-item" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
          <div className={`mci-box third ${hoveredIndex === 2 ? "hovered" : ""}`}>
            <div className="mci-icon">
              <img src={clockicon} alt="Clock icon" />
            </div>
            <h4>Resource Center</h4>
            <p>
              Library serves as a portal to the most recent material in the
              humanities, social sciences, engineering, and other fields of study.
              The library offers information services to support teaching,
              learning, research, and outreach activities of the university by
              building ultra-modern facilities and services. Putting users first,
              the Library has been actively involved in developing and delivering
              information services based on user needs.
            </p>
            <div className="mcib-box">
              <div className="mcib-icon">
                <img src={clockicon} alt="Clock icon" />
              </div>
              <div className="mcib-text">
                <h4>Library Hours</h4>
                <p>
                  9.00 am to 3.30 pm <br />
                  (Monday – Saturday)
                </p>
              </div>
            </div>
            <div className="mcib-img">
              <img src={robotImg3} alt="Robot" />
            </div>
          </div>
        </div>
      </div>
    );
  };


const CampusFacility = () => {
  return (
    <React.Fragment>

      <div className="innerherotwo2 admission-inner-hero type3" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
        <div className="container hero-container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>CAMPUS FACILITIES</h1>
              <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              <Link className="btn btn-default"> Apply Now </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container fc-container">
         <div className="container">
            <div className="row">
                <div className="col-xl-10 mx-auto">
                    
                    <div className="fc-list">
                        <div className="fc-item">
                              <div className="facility-box w-full h-full relative">
                                  <div className="facility-img relative"><img src={img2} alt="" /></div>
                                    <div className="facility-hover-box">
                                      <div className="facility-hover-letter">
                                          <img src={letterR} alt="" />
                                      </div>
                                  </div>
                                  <div className="facility-content">RESOURCE <br/> CENTER</div>
                              </div>
                        </div>
                        <div className="fc-item">
                              <div className="facility-box w-full h-full relative">
                                  <div className="facility-img relative"><img src={img3} alt="" /></div>
                                    <div className="facility-hover-box">
                                      <div className="facility-hover-letter">
                                          <img src={letterR} alt="" />
                                      </div>
                                  </div>
                                  <div className="facility-content">CAMPUS <br/> FACILITY</div>
                              </div>
                        </div>
                        <div className="fc-item">
                              <div className="facility-box w-full h-full relative">
                                  <div className="facility-img relative"><img src={img4} alt="" /></div>
                                    <div className="facility-hover-box">
                                      <div className="facility-hover-letter">
                                          <img src={letterR} alt="" />
                                      </div>
                                  </div>
                                  <div className="facility-content">TRANSPORT & HOSTEL FACILITY</div>
                              </div>
                        </div>
                    </div>

                </div>
            </div>
         </div>
      </div>
      <div className="content-container campus-box type-3" style={{ backgroundImage: `url(${cmapusbg2})` }}>
        <div className="campus-lable"> </div>
         <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="cb-heading">
                        <h4> RESOURCE <span> CENTER </span>  </h4>
                    </div>
                    <HoverCard />
                    <div className="ccb-box">
                        <div className="ccb-list">
                             <div className="ccb-item">
                                  <h4> Online Catalogue  </h4>
                                  <div className="ccb-btn"> <Link to=''> Explore Now  <img src={whiteleft} alt="" /> </Link> </div>
                             </div>
                             <div className="ccb-item">
                                  <h4> Online Resources  </h4>
                                  <p> The digital content of the lecture tutorials are available through multimedia PCs of Resource Centre. </p>
                                  <div className="ccb-btn"> <Link to=''> Explore Now  <img src={whiteleft} alt="" /> </Link> </div>
                             </div>
                             <div className="ccb-item">
                                  <h4> NPTEL Videos  </h4>
                                  <p> </p>
                                  <div className="ccb-btn"> <Link to=''> Explore Now  <img src={whiteleft} alt="" /> </Link> </div>
                             </div>
                        </div>
                    </div>
                    <div className="cb-deco-box">
                        <div className="cdb-left">
                            <h4> Open Access Resources </h4>
                            <ul className='cb-deco-list'>
                                <li className="cb-deco-item"> NDLI</li>
                                <li className="cb-deco-item"> Directory of Open Access Books (DOAB)ks</li>
                                <li className="cb-deco-item"> Directory of Open Access Journal (DOAJ)</li>
                                <li className="cb-deco-item"> Directory of Open Access Repositories</li>
                                <li className="cb-deco-item"> WorldWideScience.org</li>
                                <li className="cb-deco-item"> National Digital Library of India (NDL)</li>
                                <li className="cb-deco-item"> World Digital Library</li>
                                <li className="cb-deco-item"> Advocate Khoj</li>
                                <li className="cb-deco-item"> Free e-books: Project Gutenberg Digital Library</li>
                                <li className="cb-deco-item"> India Kanoon – Search engine for India Law</li>
                            </ul>
                        </div>
                        <div className="cbd-right">
                            <ul className='cb-deco-list'>
                                <li className="cb-deco-item"> Bookboon: Download free e-books </li>
                                <li className="cb-deco-item"> Chartered Secretary (ICSI)</li>
                                <li className="cb-deco-item"> Indian Academy of Science Journals of Open Access Journal (DOAJ)</li>
                                <li className="cb-deco-item"> NISCAIR Journals</li>
                                <li className="cb-deco-item"> Hathi Trust’s Digital Library.orgg</li>
                                <li className="cb-deco-item"> Indian National Science Academy Journal</li>
                                <li className="cb-deco-item"> Defense Research and Development Organization (DRDO)</li>
                                <li className="cb-deco-item"> InTech Open Access</li>
                                <li className="cb-deco-item"> MATH WORLD </li>
                                <li className="cb-deco-item"> Indian Academy of Sciences (IAS) </li>
                            </ul> 
                        </div>
                    </div>
                    <div className="campus-dt-img"> <img src={campusBoxImg} alt="" /> </div>
                </div>
            </div>
         </div>
      </div>    
      <div className="content-container campus-box tye-2" style={{ backgroundImage: `url(${campusbg})` }}>
        <div className="campus-lable"> </div>
         <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                   
                    <div className="cb-heading">
                        <h4> CAMPUS <span> FACILITIES</span>  </h4>
                    </div>
                    
                    <div className="cb-list">
                      <div className="cb-item">
                        <div className="cb-box">
                            <div className="cb-icon"> <img src={cupicon} alt="" /> </div>
                            <div className="cb-text">
                                <h4> CANTEEN </h4>
                                <p> The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                            </div>
                            <div className="cb-img">  <img src={chairicon} alt="" /> </div>
                        </div>
                      </div>
                      <div className="cb-item">
                        <div className="cb-box">
                            <div className="cb-icon"> <img src={penicon} alt="" /> </div>
                            <div className="cb-text">
                                <h4> Stationary Store </h4>
                                <p> The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                            </div>
                            <div className="cb-img">  <img src={basketicon} alt="" /> </div>
                        </div>
                      </div>
                      <div className="cb-item">
                        <div className="cb-box">
                            <div className="cb-icon"> <img src={coloricon} alt="" /> </div>
                            <div className="cb-text">
                                <h4> Art LABORATORY  </h4>
                                <p> The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                            </div>
                            <div className="cb-img">  <img src={coloricon2} alt="" /> </div>
                        </div>
                      </div>
                    </div>

                    <div className="cb-text-lable-list">
                        <div className="cb-text-lable-item">
                            <div className="ctli-box">
                                <div className="ctli-icon"> <img src={wifiicon} alt="" /> </div>
                                <div className="ctli-text"> 
                                   <h4> WI-FI ENABLED CAMPUS </h4>
                                   <p> The entire campus of GIT is Wi-Fi enabled which facilitates the students to access the internet from anywhere in the campus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="cb-text-lable-item">
                            <div className="ctli-box">
                                <div className="ctli-icon"> <img src={moblieicon} alt="" /> </div>
                                <div className="ctli-text"> 
                                   <h4> Computing Facilities </h4>
                                   <p> The entire campus of GIT is Wi-Fi enabled which facilitates the students to access the internet from anywhere in the campus. </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                    <div className="campus-dt-img"> <img src={campusBoxImg} alt="" /> </div>
                </div>
            </div>
         </div>
      </div>   
      <div className="content-container campus-box" style={{ backgroundImage: `url(${campusbg})` }}>
         <div className="campus-lable"> </div>
         <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                   
                    <div className="cb-heading">
                        <h4> TRANSPORT & <span> HOSTEL </span>  </h4>
                    </div>
                    
                    <div className="cb-list">
                      <div className="cb-item">
                        <div className="cb-box">
                            <div className="cb-icon"> <img src={bedicon} alt="" /> </div>
                            <div className="cb-text">
                                <h4> HOSTEL </h4>
                                <p> The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                            </div>
                            <div className="cb-img">  <img src={bed} alt="" /> </div>
                        </div>
                      </div>
                      <div className="cb-item">
                        <div className="cb-box">
                            <div className="cb-icon"> <img src={busicon} alt="" /> </div>
                            <div className="cb-text">
                                <h4> TRANSPORT </h4>
                                <p> The campus provides a refreshing environment with different facilities which makes our students feel at home. </p>
                            </div>
                            <div className="cb-img">  <img src={bus} alt="" /> </div>
                        </div>
                      </div>
                    </div>

                    <div className="cb-text-lable-list">
                        <div className="cb-text-lable-item">
                            <div className="ctli-box">
                                <div className="ctli-icon"> <img src={transportation} alt="" /> </div>
                                <div className="ctli-text"> 
                                   <h4> Transportation </h4>
                                   <p> The entire campus of GIT is Wi-Fi enabled which facilitates the students to access the internet from anywhere in the campus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="cb-text-lable-item">
                            <div className="ctli-box">
                                <div className="ctli-icon"> <img src={bedicon} alt="" /> </div>
                                <div className="ctli-text"> 
                                   <h4> Hostel Facility </h4>
                                   <p> The entire campus of GIT is Wi-Fi enabled which facilitates the students to access the internet from anywhere in the campus. </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                    <div className="campus-dt-img"> <img src={campusBoxImg} alt="" /> </div>
                </div>
            </div>
         </div>
      </div>    
    </React.Fragment>
  )
}

export default CampusFacility;


