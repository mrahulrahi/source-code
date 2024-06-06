import React from 'react'
import './InstitutionsAbout.css'
import img from '../../assets/images/flying-drone-img.png'

const InstitutionsAbout = () => {
    return (
        <div className="institutions-about-container relative overflow-hidden">
            <div className="container add-index">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap">
                            <div className="institutions-about-content ms-lg-auto">
                                <h3>About GIT</h3>
                                <p>Gandhinagar Institute of Technology (GIT), affiliated to Gandhinagar University is a nationally renowned Institute of higher education, offering world class education in undergraduate and post graduate program in whole range of Technology disciplines. The Institute has been rated as a 4 Star Institute under the GSIRF 2023 (Gujarat State Institutional Ranking Framework). GIT offers UG and PG courses which are approved by AICTE, New Delhi.</p>
                                <p>It offers Bachelor level technical program (B.Tech.) in Computer Engineering, Information Technology, Mechanical Engineering, Electronics & Communication Engineering, Electrical Engineering and Civil Engineering.It also offers Master level technical program (M. Tech.) in Computer Engineering with specialization in Software Engineering and M. Tech. in Mechanical Engineering with specialization in Thermal Engineering and CAD / CAM.</p>
                                <p>GIT nurtures its students all faceted growth of its students and serves a link between theory and practice using multidisciplinary education by following New Education Policy (NEP – 2020). Academic Regulations</p>
                            </div>
                            <div className="institutions-about-img d-flex align-items-center justify-content-center">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InstitutionsAbout