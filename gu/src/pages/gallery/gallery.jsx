import React from 'react'
import './gallery.css'
import GalleryCard from '../../components/GalleryCard/GalleryCard'


const gallery = () => {
  return (
    <React.Fragment>

      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h4>Sports</h4>
              </div>
              <div className="gallery-card-list flex flex-wrap">
              <div className="gallery-card-item">
                <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={ih} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default gallery