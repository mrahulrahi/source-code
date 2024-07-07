import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import testimonialBGIcon from '../../assets/images/testimonials-bg-icon.svg';
import testimonialImg1 from '../../assets/images/testimonials-img-1.png';
import testimonialImg2 from '../../assets/images/testimonials-img-2.png';


const Testimonials = () => {
    return (
        <React.Fragment>
            <div className="content-container overflow-hidden">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="testimonials-left position-relative h-100">
                                <div className="testimonials-left-bg w-100 h-100 position-absolute top-0 start-0">
                                    <img className="w-100 h-100 object-fit-contain" src={testimonialBGIcon} alt="" />
                                </div>
                                <div className="position-relative z-3">
                                    <h5> Student </h5>
                                    <h3> T e s t i m - o n i a l s </h3>
                                    <p>The campus provides a refreshing environment with different facilities which makes our students feel at home. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 pt-5 pt-lg-0">
                            <div className="testimonials-right">
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={0}
                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="testimonialsSlider"
                                >
                                    <SwiperSlide className="testimonials-item">
                                        <div className="testimonials-box">
                                            <div className="testimonials-box-inner">
                                                <div className="testimonials-img"> <img src={testimonialImg1} alt="" /> </div>
                                                <div className="testimonials-content">
                                                    <div className="testimonials-name-box">
                                                        <h5>Nikhita B.</h5>
                                                    </div>
                                                    <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonials-item">
                                        <div className="testimonials-box">
                                            <div className="testimonials-box-inner">
                                                <div className="testimonials-img"> <img src={testimonialImg2} alt="" /> </div>
                                                <div className="testimonials-content">
                                                    <div className="testimonials-name-box">
                                                        <h5>Nikhil B.</h5>
                                                    </div>

                                                    <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonials-item">
                                        <div className="testimonials-box">
                                            <div className="testimonials-box-inner">
                                                <div className="testimonials-img"> <img src={testimonialImg1} alt="" /> </div>
                                                <div className="testimonials-content">
                                                    <div className="testimonials-name-box">
                                                        <h5>Nikhita B.</h5>
                                                    </div>
                                                    <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonials-item">
                                        <div className="testimonials-box">
                                            <div className="testimonials-box-inner">
                                                <div className="testimonials-img"> <img src={testimonialImg2} alt="" /> </div>
                                                <div className="testimonials-content">
                                                    <div className="testimonials-name-box">
                                                        <h5>Nikhil B.</h5>
                                                    </div>
                                                    <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Testimonials;
