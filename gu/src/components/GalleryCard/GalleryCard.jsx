import React from 'react'
import './GalleryCard.css'
import guLogo from '../../assets/images/gu-logo-icon.svg'

const GalleryCard = ({date,name,category,img}) => {
    return (
        <div className="gallery-card-box w-full h-full">
            <div className="gallery-card-img"><img src={img} alt="" /></div>
            <div className="gallery-card-content w-full h-full flex flex-col">
                <div className="d-flex justify-content-between">
                <div className="gallery-card-date">{date}</div>
                <div className="gallery-card-logo"><img src={guLogo} alt="" /></div>
                </div>
            
                <h6>{name}</h6>
                <p>{category}</p>
            </div>
        </div>
    )
}

export default GalleryCard