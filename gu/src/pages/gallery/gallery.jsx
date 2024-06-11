import './gallery.css'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import sports from '../../data/gallerySport.json'


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
              <div className="gallery-card-list">
                {sports.map((sport) => (
                  <div key={sport.id} className="gallery-card-item">
                    <GalleryCard item={sport} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default gallery