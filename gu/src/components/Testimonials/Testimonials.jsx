import React from 'react';
import './Testimonials.css';
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




const Testimonials = () => {
  return (
    <React.Fragment>


      <div className="content-container overflow-hidden">
         <div className="container">
             <div className="row">

                 <div className="col-lg-5">
                     <div className="testimonials-slider-text">
                         <div className="pt-flag">
                             <h5> Student </h5>
                             <h3> T e s t i m -
                             o n i a l s </h3>
                             <p>The campus provides a refreshing environment with different facilities which makes our students feel at home. </p>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-6">
                 <Swiper
                        spaceBetween={7}
                        loop={true}
                        slidesPerView={3}
                        speed={1000}
                        modules={[Autoplay, Navigation]}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                          480: { slidesPerView: 1 },
                          768: { slidesPerView: 2 },
                          1199: { slidesPerView: 3 }
                        }}
                        className="testimonialsSlider"
                    >

                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <div className="testimonials-box">
                                       <div className="pi-img"> <img src={tcsImg1} alt="" /> </div>
                                        <div className="pi-text">
                                             <h4> Tanya B. </h4>
                                             <div className="pi-box">
                                                 <div className="pi-logo"> <img src={tcsIcon} alt="" /> </div>
                                                 <div className="pi-logo-text"> LPA: 09  </div>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <div className="testimonials-box">
                                       <div className="pi-img"> <img src={tcsImg2} alt="" /> </div>
                                        <div className="pi-text">
                                             <h4> Tanmay J. </h4>
                                             <div className="pi-box">
                                                 <div className="pi-logo"> <img src={byjusIcon} alt="" /> </div>
                                                 <div className="pi-logo-text"> LPA: 09  </div>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <div className="testimonials-box">
                                       <div className="pi-img"> <img src={tcsImg3} alt="" /> </div>
                                        <div className="pi-text">
                                             <h4> rita N. </h4>
                                             <div className="pi-box">
                                                 <div className="pi-logo"> <img src={flipkartIcon} alt="" /> </div>
                                                 <div className="pi-logo-text"> LPA: 09  </div>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <div className="testimonials-box">
                                       <div className="pi-img"> <img src={tcsImg4} alt="" /> </div>
                                        <div className="pi-text">
                                             <h4> ben t. </h4>
                                             <div className="pi-box">
                                                 <div className="pi-logo"> <img src={amazonIcon} alt="" /> </div>
                                                 <div className="pi-logo-text"> LPA: 09  </div>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                 </div>

             </div>
         </div>
      </div>

    
    </React.Fragment>
  );
}

export default Testimonials;
