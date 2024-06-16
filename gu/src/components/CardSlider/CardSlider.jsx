import React from 'react';
import './CardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CardSlider = ({ slides, additionalClassName, additionalClassNametwo }) => {
  return (
    <div className={`content-container py-0 ${additionalClassNametwo}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="Cardslider"
              loop={true}
              spaceBetween={10}
              breakpoints={{
                320: {   
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {   
                  slidesPerView: 3,
                },
                1024: {  
                  slidesPerView: 4,
                },
                1200: {  
                  slidesPerView: 5,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slider-item">
                    <div className={`slider-box ${additionalClassName}`}>
                      <h4>{slide.title}</h4>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
