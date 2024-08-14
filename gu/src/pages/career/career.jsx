import React, { useRef, useEffect, useState } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import './career.css';
import inner6 from '../../assets/images/inner-img-6.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const Career = () => {
  const galleryRef = useRef(null);
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    // Fetch career data from the API
    fetch('https://ghandhinagaru.shopperbite.com/api/getCareer')
      .then(response => response.json())
      .then(data => {
        setCareerData(data);
      })
      .catch(error => {
        console.error('Error fetching career data:', error);
      });
  }, []);

  const handleItemClick = (imageSrc) => {
    if (galleryRef.current) {
      galleryRef.current.destroy();
    }

    galleryRef.current = lightGallery(document.createElement('div'), {
      plugins: [lgThumbnail],
      dynamic: true,
      dynamicEl: [
        {
          src: imageSrc,
          thumb: imageSrc,
        },
      ],
    });

    galleryRef.current.openGallery(0);
  };

  return (
    <React.Fragment>
      <Innerhero backgroundImage={inner6} title="CAREER" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="career-head text-center">
                <h4 className="uppercase">
                  <span className="text-gold">Career At</span> GU
                </h4>
                <p>
                  The Internal Quality Assurance Cell (IQAC) was established in 2019 at Gandhinagar University (GU) with the focus to make quality the defining element at GU. The IQAC ensures the effective implementation of quality initiatives through a combination of self and external quality evaluation, promotion, and sustenance initiatives. The IQAC strives for excellence in all of the university’s academic and administrative activities. For the functions of IQAC cell refer to the IQAC policy.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="career-list flex flex-wrap">
                {careerData.length > 0 ? (
                  careerData.map((career, index) => (
                    <div className="career-item" key={index} onClick={() => handleItemClick(`https://ghandhinagaru.shopperbite.com/assets/uploads/${career.image}`)}>
                      <div className="career-box bg-graphic h-100">
                        <div className="flex flex-col add-index h-100">
                          <h6>{career.title}</h6>
                          <p>{career.name}</p>
                          <div className="career-exp mt-auto">Exp: {career.experiance} Yrs</div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading career opportunities...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Career;
