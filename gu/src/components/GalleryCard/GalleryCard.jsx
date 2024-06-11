import React from 'react'
import './GalleryCard.css'

const GalleryCard = ({date,name,category,img}) => {
    return (
        <div className="gallery-card-box w-full h-full">
            <div className="gallery-card-img"><img src={img} alt="" /></div>
            <div className="gallery-card-inner w-full h-full flex items-center">
                <div className="gallery-card-date">{date}</div>
                <h6>{name}</h6>
                <p>{category}</p>
            </div>
        </div>
    )
}

export default GalleryCard