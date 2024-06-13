import React from 'react'
import './AuthorityCard.css'

const AuthorityCard = ({ name, post, email, phone }) => {
    return (
        <div className="authority-card-box w-full h-full">
            <div className="authority-card-name">{name}</div>
            <div className="authority-card-post">{post}</div>
            <div className="authority-card-email">{email}</div>
            <div className="authority-card-phone">{phone}</div>
        </div>  
    )
}

export default AuthorityCard