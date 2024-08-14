import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Ic.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const InfoCompany = () => {
    const [placements, setPlacements] = useState([]);

    useEffect(() => {
        axios.get('https://ghandhinagaru.shopperbite.com/api/getAllPlacements')
            .then(response => {
                setPlacements(response.data);
            })
            .catch(error => {
                console.error('Error fetching placements data:', error);
            });
    }, []);

    useEffect(() => {
        // Reinitialize Swiper on data load
        const sliderInit = setTimeout(() => {
            const swiper = document.querySelector('.placementSlider').swiper;
            if (swiper) {
                swiper.autoplay.start();  // Ensure autoplay starts
            }
        }, 100); // Small timeout for Swiper to initialize properly

        return () => clearTimeout(sliderInit);
    }, [placements]);

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
                                    slidesPerView={1}
                                    loop={true}
                                    autoHeight={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        375: {
                                            slidesPerView: 2
                                        },
                                        576: {
                                            slidesPerView: 3
                                        }
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
                                    {placements.map((placement, index) => (
                                        <SwiperSlide className="placement-item " key={index}>
                                            <div className="placement-box">
                                                <div className="pi-img"> <img src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${placement.image}`} alt={placement.name} /> </div>
                                                <div className="pi-text">
                                                    <h4> {placement.name} </h4>
                                                    <div className="pi-box">
                                                        <div className="pi-logo"> <img src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${placement.company_logo}`} alt={placement.company} /> </div>
                                                        <div className="pi-logo-text"> LPA: {placement.description} </div>
                                                    </div>
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
        </React.Fragment>
    );
}

export default InfoCompany;
