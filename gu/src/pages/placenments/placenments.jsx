import React from 'react';
import './pm.css';
import Inner14 from '../../assets/images/inner-img-14.jpg';
import InfoCompany from '../../components/InfoCompany/InfoCompany';
import clickImg from '../../assets/images/clickme.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


import Icon1 from '../../assets/images/icon1.svg';
import Icon2 from '../../assets/images/icon2.svg';
import Icon3 from '../../assets/images/icon3.svg';
import Icon4 from '../../assets/images/icon4.svg';
import Icon5 from '../../assets/images/icon5.svg';
import Icon6 from '../../assets/images/icon6.svg';
import Icon7 from '../../assets/images/icon7.svg';
import Icon8 from '../../assets/images/icon8.svg';

import g1 from '../../assets/images/g1.png';
import g2 from '../../assets/images/g2.png';
import g3 from '../../assets/images/g3.png';
import g4 from '../../assets/images/g4.png';
import g5 from '../../assets/images/g5.png';
import g6 from '../../assets/images/g6.png';
import g7 from '../../assets/images/g7.png';
import g8 from '../../assets/images/g8.png';
import g9 from '../../assets/images/g9.png';
import g10 from '../../assets/images/g10.png';
import g11 from '../../assets/images/g11.png';
import g12 from '../../assets/images/g12.png';
import g13 from '../../assets/images/g13.png';
import g14 from '../../assets/images/g14.png';

const iconList = [
  { id: 1, name: 'Icon1', img: Icon1 },
  { id: 2, name: 'Icon2', img: Icon2 },
  { id: 3, name: 'Icon3', img: Icon3 },
  { id: 4, name: 'Icon4', img: Icon4 },
  { id: 5, name: 'Icon5', img: Icon5 },
  { id: 6, name: 'Icon6', img: Icon6 },
  { id: 7, name: 'Icon7', img: Icon7 },
  { id: 8, name: 'Icon8', img: Icon8 },
  { id: 9, name: 'Icon1', img: Icon1 },
  { id: 10, name: 'Icon2', img: Icon2 },
  { id: 11, name: 'Icon3', img: Icon3 },
  { id: 12, name: 'Icon4', img: Icon4 },
  { id: 13, name: 'Icon5', img: Icon5 },
  { id: 14, name: 'Icon6', img: Icon6 },
  { id: 15, name: 'Icon7', img: Icon7 },
  { id: 16, name: 'Icon8', img: Icon8 },
  { id: 17, name: 'Icon1', img: Icon1 },
  { id: 18, name: 'Icon2', img: Icon2 },
  { id: 19, name: 'Icon3', img: Icon3 },
  { id: 20, name: 'Icon4', img: Icon4 },
  { id: 21, name: 'Icon5', img: Icon5 },
  { id: 22, name: 'Icon6', img: Icon6 },
  { id: 23, name: 'Icon7', img: Icon7 },
  { id: 24, name: 'Icon8', img: Icon8 },
];

const corporateMentorsList = [
  g1, g2, g3, g4, g5, g6, g7, g1, g2, g3, g4, g5, g6, g7,
  g1, g2, g3, g4, g5, g6, g7,g1, g2, g3, g4, g5, g6, g7, 
];

const corporateMentorsList2 = [
    g8, g9, g10, g11, g12, g13, g14, g8, g9, g10, g11, g12, g13, g14,
    g8, g9, g10, g11, g12, g13, g14, g8, g9, g10, g11, g12, g13, g14,
];


const Placements = () => {
  return (
    <React.Fragment>
      <div className="innerherotwo2" style={{ backgroundImage: `url(${Inner14})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>PLACEMENTS</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5000}
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 8 }
                }}
                className="iconList-swiper"
              >
                {iconList.map((icon) => (
                  <SwiperSlide key={icon.id} className="ic-icon-list">
                    <div className="ic-icon-item">
                      <img src={icon.img} alt={icon.name}/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <InfoCompany />

      <div className="content-container corporatementors bg-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cm-heading">
                <h4>CORPORATE <span>MENTORS</span></h4>
                <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              </div>
              <Swiper
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5000}
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 8 }
                }}
                className="iconList-swiper">
                {corporateMentorsList.map((imgSrc, index) => (
                  <SwiperSlide key={index} className="cm-item">
                    <img src={imgSrc} alt={`g${index + 1}`} />
                  </SwiperSlide>
                ))}
                {corporateMentorsList.map((imgSrc, index) => (
                  <SwiperSlide key={index} className="cm-item">
                    <img src={imgSrc} alt={`g${index + 1}`} />
                  </SwiperSlide>
                ))}
                
              </Swiper>
              <div className="content-container pb-0">
                  
              <Swiper
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5000}
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 8 }
                }}
                className="iconList-swiper">
                {corporateMentorsList2.map((imgSrc, index) => (
                  <SwiperSlide key={index} className="cm-item">
                    <img src={imgSrc} alt={`g${index + 1}`} />
                  </SwiperSlide>
                ))}
                {corporateMentorsList2.map((imgSrc, index) => (
                  <SwiperSlide key={index} className="cm-item">
                    <img src={imgSrc} alt={`g${index + 1}`} />
                  </SwiperSlide>
                ))}
                
              </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="num-heading">
                <h4>PLACEMENT <span>PROCEDURE</span></h4>
              </div>
              <div className="num-list">
                <div className="num-item">
                  <div className="num-box">
                    <div className="nb-box">
                      <h4>01</h4>
                      <div className="para">Invitation To Companies</div>
                      <img src={clickImg} alt="Click to know more" />
                    </div>
                    <div className="nb-text">
                      <h4>The campus provides a refreshing environment with different facilities which makes our students feel at home.</h4>
                    </div>
                  </div>
                </div>
                <div className="num-item">
                  <div className="num-box">
                    <div className="nb-box">
                      <h4>02</h4>
                      <div className="para">Job Announcement Form Submission</div>
                      <img src={clickImg} alt="Click to know more" />
                    </div>
                    <div className="nb-text">
                      <h4>The campus provides a refreshing environment with different facilities which makes our students feel at home.</h4>
                    </div>
                  </div>
                </div>
                <div className="num-item">
                  <div className="num-box">
                    <div className="nb-box">
                      <h4>03</h4>
                      <div className="para">Confirmation or Negotiation with Placement Cell</div>
                      <img src={clickImg} alt="Click to know more" />
                    </div>
                    <div className="nb-text">
                      <h4>The campus provides a refreshing environment with different facilities which makes our students feel at home.</h4>
                    </div>
                  </div>
                </div>
                <div className="num-item">
                  <div className="num-box">
                    <div className="nb-box">
                      <h4>04</h4>
                      <div className="para">Pre Placement Talks</div>
                      <img src={clickImg} alt="Click to know more" />
                    </div>
                    <div className="nb-text">
                      <h4>The campus provides a refreshing environment with different facilities which makes our students feel at home.</h4>
                    </div>
                  </div>
                </div>
                <div className="num-item">
                  <div className="num-box">
                    <div className="nb-box">
                      <h4>05</h4>
                      <div className="para">Final Recruitment Process By Companies</div>
                      <img src={clickImg} alt="Click to know more" />
                    </div>
                    <div className="nb-text">
                      <h4>The campus provides a refreshing environment with different facilities which makes our students feel at home.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       

    </React.Fragment>
  );
};

export default Placements;
