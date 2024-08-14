import React, { useEffect, useState } from 'react';
import './activities.css';
import '../../components/ActivitiesCard/ac.css';
import activitiesBg from '../../assets/images/activities-hero-img-1.jpg';
import activitiesMan from '../../assets/images/activities-hero-img-2.png';
import guLogo from '../../assets/images/gu-logo-icon.svg';
import { MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Activities = () => {
  const [categories, setCategories] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://ghandhinagaru.shopperbite.com/api/getEventCategoriesByPage/gallery');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching event categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const imageUrlPrefix = 'https://ghandhinagaru.shopperbite.com/assets/uploads/';

  const handleCardClick = (images) => {
    try {
      const parsedImages = JSON.parse(images).map(
        (image) => `${imageUrlPrefix}${image}`
      );
      setPopupImages(parsedImages);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error parsing images:", error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <React.Fragment>
      <div className="activities-hero" style={{ backgroundImage: `url(${activitiesBg})`, backgroundColor: '#000' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1> Activities </h1>
              <div className="activities-hero-img">
                <img src={activitiesMan} alt="Man participating in activities" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container py-0">
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
                  {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                      <div className="slider-item">
                        <div className="slider-box">
                          <h4>{category.title}</h4>
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

      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ac-text">
                <h4>‘A school with mind, <br /> heart, and a constant fizz!’</h4>
                <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.id} className="ActivitiesCardBg" style={{ backgroundImage: `url(${category.card_image ? imageUrlPrefix + category.card_image : guLogo})` }}>
          <h4 className="ActivitiesCardBg-text"> {category.title} </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="activities-card-wrapper position-relative">
                  <div className="custom-arrow-container d-flex align-items-center justify-content-between">
                    <a href="#!" className="custom-arrow custom-arrow-prev activities-card-prev"></a>
                    <a href="#!" className="custom-arrow custom-arrow-next activities-card-next"></a>
                  </div>

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    navigation={{
                      nextEl: ".activities-card-next",
                      prevEl: ".activities-card-prev",
                      disabledClass: "swiper-button-disabled"
                    }}
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
                    {category.events.map((event) => (
                      <SwiperSlide key={event.id}>
                        <li className="acard-item">
                          <div className="acard-box" 
                            style={{ backgroundImage: `url(${event.image[0] ? imageUrlPrefix + event.image[0] : guLogo})` }}
                            onClick={() => handleCardClick(event.image)}
                          >
                            <div className="ab-icon">
                              <img src={guLogo} alt="" />
                            </div>
                            <h4>{event.title}</h4>
                            <h5>{event.description}</h5>
                            <p>{event.description}</p>
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
        </div>
      ))}

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
}

export default Activities;
