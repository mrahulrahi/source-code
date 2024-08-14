import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import testimonialBGIcon from '../../assets/images/testimonials-bg-icon.svg';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('https://ghandhinagaru.shopperbite.com/api/getAllTestimonials')
            .then(response => {
                setTestimonials(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials data:', error);
            });
    }, []);

    return (
        <React.Fragment>
            <div className="content-container overflow-hidden">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="testimonials-left position-relative h-100">
                                <div className="testimonials-left-bg w-100 h-100 position-absolute top-0 start-0">
                                    <img className="w-100 h-100 object-fit-contain" src={testimonialBGIcon} alt="Testimonials Background Icon" />
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
                                    spaceBetween={10} // Adjust space between slides if needed
                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    modules={[Autoplay]}
                                    className="testimonialsSlider"
                                >
                                    {testimonials.length > 0 ? (
                                        testimonials.map((testimonial, index) => (
                                            <SwiperSlide className="testimonials-item" key={index}>
                                                <div className="testimonials-box">
                                                    <div className="testimonials-box-inner">
                                                        <div className="testimonials-img">
                                                            <img src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${testimonial.image}`} alt={testimonial.designation} />
                                                        </div>
                                                        <div className="testimonials-content">
                                                            <div className="testimonials-name-box">
                                                                <h5>{testimonial.designation}</h5>
                                                            </div>
                                                            <p>{testimonial.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <SwiperSlide>
                                            <div className="testimonials-box">
                                                <div className="testimonials-box-inner">
                                                    <p>No testimonials available</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
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
