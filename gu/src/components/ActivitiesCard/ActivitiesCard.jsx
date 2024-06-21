import React from 'react';
import './ac.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ActivitiesCard = ({ backgroundImage, slides, height }) => {
  return (
    <React.Fragment>
      <div className="ActivitiesCardBg" style={{ backgroundImage: `url(${backgroundImage})`, height: height }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="ActivitiesCard"
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <li className="acard-item">
                      <div className="acard-box" style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className="ab-icon">
                          <img src={slide.icon} alt="" />
                        </div>
                        <h4>{slide.eventName}</h4>
                        <h5>{slide.type}</h5>
                        <p>{slide.description}</p>
                        <button className="ac-btn">Explore Gallery</button>
                      </div>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActivitiesCard;
