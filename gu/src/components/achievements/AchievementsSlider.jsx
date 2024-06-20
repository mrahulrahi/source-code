import React from 'react';
import './as.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import asimg from '../../assets/images/achievements-img.jpg';

const AchievementsSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={25}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={false}
      preloadImages={false}
      className="AchievementsSlider"
    >

      <SwiperSlide className="as-item">
        <div className="as-box">
          <div className="as-img"> <img src={asimg} alt="" /> </div>
          <div className="as-text">
            <h4>ART-A-THON 2.0</h4>
            <p>Gandhinagar Institute of Technology was felicitated by Shri Shailendra Mishra (Zonal Director, NCB) on 25/06/2021 for participating in “ART-A-THON 2.0” event. The event was organized by High On Life Foundation, in association with Narcotics Control Bureau (Ahmedabad Zonal Unit), Nasha Mukt Bharat Campaign, Gujarat and Ahmedabad Police. Ms. Sanjana Singh (180120111008) and Ms. Diya Patel (200120107058) won laurels for the institute in the event.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="as-item">
        <div className="as-box">
          <div className="as-img"> <img src={asimg} alt="" /> </div>
          <div className="as-text">
            <h4>ART-A-THON 2.0</h4>
            <p>Gandhinagar Institute of Technology was felicitated by Shri Shailendra Mishra (Zonal Director, NCB) on 25/06/2021 for participating in “ART-A-THON 2.0” event. The event was organized by High On Life Foundation, in association with Narcotics Control Bureau (Ahmedabad Zonal Unit), Nasha Mukt Bharat Campaign, Gujarat and Ahmedabad Police. Ms. Sanjana Singh (180120111008) and Ms. Diya Patel (200120107058) won laurels for the institute in the event.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="as-item">
        <div className="as-box">
          <div className="as-img"> <img src={asimg} alt="" /> </div>
          <div className="as-text">
            <h4>ART-A-THON 2.0</h4>
            <p>Gandhinagar Institute of Technology was felicitated by Shri Shailendra Mishra (Zonal Director, NCB) on 25/06/2021 for participating in “ART-A-THON 2.0” event. The event was organized by High On Life Foundation, in association with Narcotics Control Bureau (Ahmedabad Zonal Unit), Nasha Mukt Bharat Campaign, Gujarat and Ahmedabad Police. Ms. Sanjana Singh (180120111008) and Ms. Diya Patel (200120107058) won laurels for the institute in the event.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="as-item">
        <div className="as-box">
          <div className="as-img"> <img src={asimg} alt="" /> </div>
          <div className="as-text">
            <h4>ART-A-THON 2.0</h4>
            <p>Gandhinagar Institute of Technology was felicitated by Shri Shailendra Mishra (Zonal Director, NCB) on 25/06/2021 for participating in “ART-A-THON 2.0” event. The event was organized by High On Life Foundation, in association with Narcotics Control Bureau (Ahmedabad Zonal Unit), Nasha Mukt Bharat Campaign, Gujarat and Ahmedabad Police. Ms. Sanjana Singh (180120111008) and Ms. Diya Patel (200120107058) won laurels for the institute in the event.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default AchievementsSlider;
