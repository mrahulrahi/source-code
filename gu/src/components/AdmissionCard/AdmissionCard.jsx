import React from 'react'
import './AdmissionCard.css'
import seatIcon from '../../assets/images/admission-seat-icon.svg'

const AdmissionCard = ({ title, year, seat }) => {
    return (
        <div className="admission-box d-flex flex-column w-100 h-100">
            <h5>{title}</h5>
            <div className="d-flex align-items-end justify-content-between mt-auto">
                <div className="admission-seat d-flex align-items-center">
                    <div className="admission-seat-icon"><img src={seatIcon} alt="" /></div>
                    {seat}
                </div>
                <div className="admission-year"><span>{year}</span> YEARS</div>
            </div>
        </div>
    )
}

export default AdmissionCard