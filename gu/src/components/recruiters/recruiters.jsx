import React from 'react';
import './recruiters.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ispat from '../../assets/images/ispat-icon.svg';
import tata from '../../assets/images/tata-icon.svg';
import infosys from '../../assets/images/infosys.svg';
import induslandBank from '../../assets/images/indusland-bank-icon.svg';
import ibm from '../../assets/images/ibm-icon.svg';
import hdfc from '../../assets/images/hdfc-bank-icon.svg';
import einfochips from '../../assets/images/einfochips-icon.svg';
import cipla from '../../assets/images/cipla-icon.svg';

const recruiters = [
  { id: 1, name: 'Ispat', img: ispat },
  { id: 2, name: 'Tata', img: tata },
  { id: 3, name: 'Infosys', img: infosys },
  { id: 4, name: 'Indusland Bank', img: induslandBank },
  { id: 5, name: 'IBM', img: ibm },
  { id: 6, name: 'HDFC', img: hdfc },
  { id: 7, name: 'eInfochips', img: einfochips },
  { id: 8, name: 'Cipla', img: cipla },
  { id: 9, name: 'Ispat', img: ispat },
  { id: 10, name: 'Tata', img: tata },
  { id: 11, name: 'Infosys', img: infosys },
  { id: 12, name: 'Indusland Bank', img: induslandBank },
  { id: 13, name: 'IBM', img: ibm },
  { id: 14, name: 'HDFC', img: hdfc },
  { id: 15, name: 'eInfochips', img: einfochips },
  { id: 16, name: 'Cipla', img: cipla },
];

const Recruiters = ({className}) => {
  return (
    <div className={`content-container ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="recruiters-heading">
              <h4> <span> OUR TOP </span> RECRUITERS </h4>
              <h5> <span> Get Placed </span> Where You Belong </h5>
            </div>
            <div className="recruiters-list-wrapper">
              <Swiper
                spaceBetween={70}
                loop={true}
                autoplay={{enabled: true, delay: 1, disableOnInteraction: false }}
                speed={5000}
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 8 }
                }}
                className="recruiters-swiper"
              >
                {recruiters.map((recruiter) => (
                  <SwiperSlide key={recruiter.id} className="recruiters-item">
                    <div className="recruiters-box"><img src={recruiter.img} alt={recruiter.name} /></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruiters;
