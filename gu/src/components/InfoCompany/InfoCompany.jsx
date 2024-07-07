import React from 'react';
import './Ic.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import tcsImg1 from '../../assets/images/Placements-img-1.jpg';
import tcsImg2 from '../../assets/images/Placements-img-2.jpg';
import tcsImg3 from '../../assets/images/Placements-img-3.jpg';
import tcsImg4 from '../../assets/images/Placements-img-4.jpg';
import tcsIcon from '../../assets/images/tcs-icon.svg';
import byjusIcon from '../../assets/images/byjus-icon.svg';
import flipkartIcon from '../../assets/images/flipkart-icon.svg';
import amazonIcon from '../../assets/images/amazon-icon.svg';


const InfoCompany = () => {
    return (
        <React.Fragment>
            <div className="content-container overflow-hidden text-blue">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="placement-slider-text h-100">
                                <h4><span> Our Top </span> Placements </h4>
                                <p>To provide affordable quality education, while equipping students with knowledge and skills in their chosen stream, inculcate values, identify hidden talents, provide opportunities for students to realize their full potential and thus shape them into future leaders, entrepreneurs and above all good human beings. </p>
                                <div className="pt-flag">
                                    <h5> Over </h5>
                                    <h3> 300+ </h3>
                                    <h2> Students Got Hired In <br />Top Companies </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="placement-slider-wrapper position-relative h-100">
                                <div className="custom-arrow-container d-flex align-items-center justify-content-between z-3">
                                    <a href="#!" className="custom-arrow custom-arrow-prev placement-slider-prev"></a>
                                    <a href="#!" className="custom-arrow custom-arrow-next placement-slider-next"></a>
                                </div>

                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={'auto'}
                                    centeredSlides={true}
                                    loop={true}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    // }}
                                    breakpoints={{
                                        576: { centeredSlides: false }
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    navigation={{
                                        nextEl: ".placement-slider-next",
                                        prevEl: ".placement-slider-prev",
                                        disabledClass: "swiper-button-disabled"
                                    }}
                                    pagination={{ clickable: true }}
                                    className="placementSlider"
                                >
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg1} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> Tanya B. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={tcsIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg2} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> Tanmay J. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={byjusIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg3} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> rita N. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={flipkartIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg4} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> ben t. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={amazonIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg1} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> Tanya B. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={tcsIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg2} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> Tanmay J. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={byjusIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg3} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> rita N. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={flipkartIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="placement-item">
                                        <div className="placement-box">
                                            <div className="pi-img"> <img src={tcsImg4} alt="" /> </div>
                                            <div className="pi-text">
                                                <h4> ben t. </h4>
                                                <div className="pi-box">
                                                    <div className="pi-logo"> <img src={amazonIcon} alt="" /> </div>
                                                    <div className="pi-logo-text"> LPA: 09  </div>
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

export default InfoCompany;
