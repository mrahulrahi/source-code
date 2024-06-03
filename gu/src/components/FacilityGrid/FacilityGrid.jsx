import React from 'react'
import './FacilityGrid.css'

const FacilityGrid = () => {
    return (
        <div className="facility-grid">
            <div className="facility-item w-100 h-100 tall">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-1.jpg" alt="" /></div>
                    <div className="facility-content">STATE OF THE
                        ART LABS</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-2.jpg" alt="" /></div>
                    <div className="facility-content">RESOURCE
                        CENTER</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-3.jpg" alt="" /></div>
                    <div className="facility-content">SMART
                        CAMPUS</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-4.jpg" alt="" /></div>
                    <div className="facility-content">TRANSPORTATION
                        FACILITY</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100 tall">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-5.jpg" alt="" /></div>
                    <div className="facility-content">CAMPUS
                        FACILITIES</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-6.jpg" alt="" /></div>
                    <div className="facility-content">PERFORMANCE
                        ARTS</div>
                </div>
            </div>
            <div className="facility-item w-100 h-100">
                <div className="facility-box w-100 h-100 position-relative">
                    <div className="facility-img position-relative"><img src="images/facility-img-7.jpg" alt="" /></div>
                    <div className="facility-content">CAFETERIA</div>
                </div>
            </div>
        </div>
    )
}

export default FacilityGrid