import './GalleryCard.css'

const GalleryCard = ({item}) => {
    return (
        <div className="gallery-card-box w-full h-full">
            <div className="gallery-card-img"></div>
            <div className="gallery-card-inner w-full h-full flex items-center">
                {item.date}
                {item.name}
                {item.category}
            </div>
        </div>
    )
}

export default GalleryCard  