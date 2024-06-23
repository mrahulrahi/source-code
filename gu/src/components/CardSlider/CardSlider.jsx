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
            <div className="card-slider-wrapper position-relative">
              <div className="custom-arrow-container d-flex align-items-center justify-content-between">
                <a href="#!" className="custom-arrow custom-arrow-prev card-slider-prev"></a>
                <a href="#!" className="custom-arrow custom-arrow-next card-slider-next"></a>
              </div>

              <Swiper
                navigation={{
                  nextEl: ".card-slider-next",
                  prevEl: ".card-slider-prev",
                  disabledClass: "swiper-button-disabled"
                }}
                modules={[Navigation]}
                className="Cardslider"
                loop={true}
                spaceBetween={16}
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
    </div>
  );
}

export default CardSlider;
