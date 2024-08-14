import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import '../../components/CardSlider/CardSlider.css';
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import inner10 from '../../assets/images/inner-img-10.jpg';
import guLogo from '../../assets/images/gu-logo-icon.svg';
import { MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Gallery = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [galleryData, setGalleryData] = useState(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('https://ghandhinagaru.shopperbite.com/api/getEventCategoriesByPage/gallery');
        const data = await response.json();
        setGalleryData(data);
        // Initialize refs array with the correct length
        categoryRefs.current = data.map(() => React.createRef());
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  const handleCardClick = (images) => {
    try {
      const parsedImages = JSON.parse(images).map(
        (image) => `https://ghandhinagaru.shopperbite.com/assets/uploads/${image}`
      );
      setPopupImages(parsedImages);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error parsing images:", error);
    }
  };

  const handleTitleClick = (index) => {
    if (categoryRefs.current[index]) {
      categoryRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <React.Fragment>
      <Innerherotwo backgroundImage={inner10} title="Gallery" />

      <div className="content-container py-0 gold">
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
                  {/* Map over galleryData and create a SwiperSlide for each title */}
                  {galleryData && galleryData.map((category, index) => (
                    <SwiperSlide key={index}>
                      <div className="slider-item">
                        <div className="slider-box" onClick={() => handleTitleClick(index)}>
                          <h4>{category.title}</h4> {/* Display the title from the API */}
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

      <div className="content-container gallery-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {galleryData ? (
                galleryData.map((category, index) => (
                  <div key={index} className="gallery-category" ref={categoryRefs.current[index]}>
                    <div className="heading text-uppercase">
                      <h4>{category.title}</h4>
                    </div>
                    <div className="gallery-card-list flex flex-wrap">
                      {category.events.map((event, eventIndex) => (
                        <div className="gallery-card-item" key={eventIndex}>
                          <div className="gallery-card-box w-full h-full" onClick={() => handleCardClick(event.image)}>
                            <div className="gallery-card-img">
                              {category.background_image ? (
                                <img
                                  src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${category.background_image}`}
                                  alt={event.title}
                                />
                              ) : (
                                <img src={guLogo} alt="Placeholder" />
                              )}
                            </div>
                            <div className="gallery-card-content w-full h-full flex flex-col">
                              <div className="d-flex justify-content-between">
                                <div className="gallery-card-date">
                                  {event.event_date || 'Date not provided'}
                                </div>
                                <div className="gallery-card-logo">
                                  <img src={guLogo} alt="" />
                                </div>
                              </div>
                              <h6>{event.title}</h6>
                              <p>{event.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="image-popup-overlay" onClick={closePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              <MdClose />
            </button>
            <div className="image-popup-gallery">
              {popupImages.map((image, index) => (
                <div key={index} className="image-popup-item">
                  <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
    </React.Fragment>
  );
};

export default Gallery;
