import React from 'react';
import './gallery.css';
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import inner10 from '../../assets/images/inner-img-10.jpg';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import galleryImg1 from '../../assets/images/gallery-img-1.png';
import galleryImg4 from '../../assets/images/gallery-img-4.png';
import CardSlider from '../../components/CardSlider/CardSlider';
import galleryDatas from '../../data/gallery.json';

const galleryData = Array.from({ length: 27 }, (_, index) => ({
  id: index,
  date: '03 - jun - 23',
  name: `Event Name ${index + 1}`,
  category: 'TOURNAMENT',
  img: galleryImg1, // Assuming you want to use the same image for all cards
}));

const Gallery = () => {
  return (
    <React.Fragment>
      <Innerherotwo backgroundImage={inner10} title="Gallery" />
      <CardSlider slides={galleryDatas} additionalClassNametwo="gold" />

      <div className="content-container gallery-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-card-row">
                <div className="heading text-uppercase">
                  <h4>Sports</h4>
                </div>

                <div className="gallery-card-list flex flex-wrap">
                  {galleryData.map((item) => (
                    <div className="gallery-card-item" key={item.id}>
                      <GalleryCard
                        date={item.date}
                        name={item.name}
                        category={item.category}
                        img={item.img}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="gallery-card-row">
                <div className="heading text-uppercase">
                  <h4>TECH</h4>
                </div>

                <div className="gallery-card-list flex flex-wrap">
                  {[...Array(27)].map((_, index) => (
                    <div className="gallery-card-item" key={index}>
                      <GalleryCard date="03 - jun - 23" name={`Event ${index + 1}`} category="TOURNAMENT" img={galleryImg4} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
