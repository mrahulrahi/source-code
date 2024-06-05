import React from 'react'
import './FacilityGrid.css'
import img1 from '../../assets/images/facility-img-1.jpg'
import img2 from '../../assets/images/facility-img-2.jpg'
import img3 from '../../assets/images/facility-img-3.jpg'
import img4 from '../../assets/images/facility-img-4.jpg'
import img5 from '../../assets/images/facility-img-5.jpg'
import img6 from '../../assets/images/facility-img-6.jpg'
import img7 from '../../assets/images/facility-img-7.jpg'
import letterR from '../../assets/images/r-letter-img.png'
import letterS from '../../assets/images/s-letter-img.svg'

const FacilityGrid = () => {
    return (
        <div className="facility-grid">
            <div className="facility-item w-full h-full tall">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img1} alt="" /></div>
                    <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterS} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">STATE OF THE ART LABS</div>

                </div>
            </div>
            <div className="facility-item w-full h-full">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img2} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterR} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">RESOURCE CENTER</div>
                </div>
            </div>
            <div className="facility-item w-full h-full ">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img3} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterR} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">SMART CAMPUS</div>
                </div>
            </div>
            <div className="facility-item">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img w-full h-full relative"><img src={img4} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterR} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">TRANSPORTATION FACILITY</div>
                </div>
            </div>
            <div className="facility-item w-full h-full tall">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img5} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterS} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">CAMPUS FACILITIES</div>
                </div>
            </div>
            <div className="facility-item w-full h-full ">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img6} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterR} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">PERFORMANCE ARTS</div>
                </div>
            </div>
            <div className="facility-item w-full h-full ">
                <div className="facility-box w-full h-full relative">
                    <div className="facility-img relative"><img src={img7} alt="" /></div>
                      <div className="facility-hover-box">
                        <div className="facility-hover-letter">
                            <img src={letterR} alt="" />
                        </div>
                    </div>
                    <div className="facility-content">CAFETERIA</div>
                </div>
            </div>
        </div>
    )
}

export default FacilityGrid