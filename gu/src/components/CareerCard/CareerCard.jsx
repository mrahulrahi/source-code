import React from 'react'
import './CareerCard.css'

const CareerCard = ({career}) => {
    return (
        <div className="career-box bg-graphic h-100">
            <div className="flex flex-col add-index h-100">
                <h6>{career.jobCat}</h6>
                <p>{career.jobTitle}</p>
                <div className="career-exp mt-auto">Exp: {career.jobExp}</div>
            </div>
        </div>
    )
}

export default CareerCard