import React from 'react'
import './InstituteCard.css'

const InstituteCard = ({ card }) => {

    return (
        <div className="institute-card-box">
            <h4>{card.shortName}</h4>
            <h6><span>Gandhinagar Institute of</span> {card.name}</h6>
            <div className="ic-program-row">
                <h5>Masters</h5>
                <ul className="icp-list d-flex flex-wrap">
                    <li>Mechanical Engineering (Thermal Engineering)</li>
                    <li>Mechanical Engineering (CAD/CAM)</li>
                    <li>Computer Engineering (Software Engineering).</li>
                </ul>
            </div>
            <div className="ic-bottom-row d-flex flex-column align-items-end">
                <p>Admissions at Gandhinagar University is done through The
                    Admission Committee for Professional Courses (ACPC)</p>
                <div className="ic-program-list d-flex flex-wrap justify-content-end">
                <div className="ic-program-item">
                    <div className="ic-program-box w-100 h-100">
                        <h5>Master’s</h5>
                        <div className="icp-details-wrapper d-flex justify-content-between">
                            <div className="icp-details-list">
                                <div className="icp-details-item">
                                    <h6>Tuition Fees:</h6>
                                    <p>$. 4,000/-</p>
                                </div>
                                <div className="icp-details-item">
                                    <h6>Total Package:</h6>
                                    <p>$. 8,000/-</p>
                                </div>
                            </div>
                            <div className="icp-year"><span>02</span>Years</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default InstituteCard