import React from 'react'
import './ContactCard.css'

const ContactCard = ({ name, institute, phone }) => {
    return (
        <div className="contact-card-box w-full h-full flex flex-col">
            <div className="contact-card-institute">{institute}</div>
            <div className="contact-card-name mt-auto">{name}</div>
            <div className="contact-card-phone">{phone}</div>
        </div>  
    )
}

export default ContactCard