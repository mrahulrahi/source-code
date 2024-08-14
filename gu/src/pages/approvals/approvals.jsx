import React, { useRef, useEffect, useState } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import './approvals.css';
import inner5 from '../../assets/images/inner-img-5.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const Approvals = () => {
  const galleryRef = useRef(null);
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    // Fetch approvals data from the API
    fetch('https://ghandhinagaru.shopperbite.com/api/getApprovals')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response to check the image paths
        setApprovals(data);
      })
      .catch((error) => {
        console.error('Error fetching approvals:', error);
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
      <Innerhero backgroundImage={inner5} title="APPROVALS" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="approval-head text-center">
                <h4>The Internal Quality Assurance Cell</h4>
                <p>
                  The Internal Quality Assurance Cell (IQAC) was established in 2019 at Gandhinagar University (GU) with the focus to make quality the defining element at GU. The IQAC ensures the effective implementation of quality initiatives through a combination of self and external quality evaluation, promotion, and sustenance initiatives. The IQAC strives for excellence in all of the university’s academic and administrative activities. For the functions of the IQAC cell refer to the IQAC policy.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="approval-list flex flex-wrap">
                {approvals.length > 0 ? (
                  approvals.map((approval, index) => (
                    <div className="approval-item" key={index} onClick={() => handleItemClick(`https://ghandhinagaru.shopperbite.com/assets/uploads/${approval.image}`)}>
                      <div className="approval-box bg-graphic h-100">
                        <div className="flex flex-col justify-center text-center add-index h-100">
                          <h6>{approval.title}</h6>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading approvals...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Approvals;
