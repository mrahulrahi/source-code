import React from 'react'
import './gallery.css'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import galleryImg1 from '../../assets/images/gallery-img-1.png'
import galleryImg2 from '../../assets/images/gallery-img-2.png'
import galleryImg3 from '../../assets/images/gallery-img-3.png'
import galleryImg4 from '../../assets/images/gallery-img-4.png'

const gallery = () => {
  return (
    <React.Fragment>

      <div className="content-container gallery-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-card-row">
                <div className="heading text-uppercase">
                  <h4>Sports</h4>
                </div>
                <div className="gallery-card-list flex flex-wrap">
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg1} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg2} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg1} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg2} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg1} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg2} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Event Name" category="TOURNAMENT" img={galleryImg3} />
                  </div>
                </div>
              </div>

              <div className="gallery-card-row">
                <div className="heading text-uppercase">
                  <h4>TECH</h4>
                </div>
                <div className="gallery-card-list flex flex-wrap">
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="ROBOTICS" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Football" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="ROBOTICS" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Football" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="ROBOTICS" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Football" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
                  <div className="gallery-card-item">
                    <GalleryCard date="03 - jun - 23" name="Cricket" category="TOURNAMENT" img={galleryImg4} />
                  </div>
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