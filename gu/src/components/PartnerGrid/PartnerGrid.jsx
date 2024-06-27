import React from 'react'
import './PartnerGrid.css'
import ipImg1 from '../../assets/images/ip-img-1.jpg'
import ipImg2 from '../../assets/images/ip-img-2.jpg'
import ipImg3 from '../../assets/images/ip-img-3.jpg'
import ipImg4 from '../../assets/images/ip-img-4.jpg'
import ipImg5 from '../../assets/images/ip-img-5.jpg'
import iphLogo1 from '../../assets/images/iph-logo-img-1.png'
import iphLogo2 from '../../assets/images/iph-logo-img-2.png'
import iphLogo3 from '../../assets/images/iph-logo-img-3.png'
import iphLogo4 from '../../assets/images/iph-logo-img-4.png'
import iphLogo5 from '../../assets/images/iph-logo-img-5.png'


const PartnerGrid = () => {
    return (
        <div className="content-container bg-blue">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="international-partners-list d-flex flex-wrap">
                            <div className="international-partners-item">
                                <div className="international-partners-head w-100 h-100">
                                    <h3><small>OUR</small> <span>INTERNATIONAL</span> PARTNERS</h3>
                                    <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                                    <ul className="iph-logo-list d-flex align-items-center">
                                        <li><img src={iphLogo1} alt="" /></li>
                                        <li><img src={iphLogo2} alt="" /></li>
                                        <li><img src={iphLogo3} alt="" /></li>
                                        <li><img src={iphLogo4} alt="" /></li>
                                        <li><img src={iphLogo5} alt="" /></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="international-partners-item">
                                <div className="international-partners-box w-100 h-100 d-flex">
                                    <div className="ip-image"><img src={ipImg1} alt="" /></div>
                                    <div className="ip-content align-self-end">South Ural State University</div>
                                </div>
                            </div>

                            <div className="international-partners-item">
                                <div className="international-partners-box w-100 h-100 d-flex">
                                    <div className="ip-image"><img src={ipImg2} alt="" /></div>
                                    <div className="ip-content align-self-end">ICEPD – Thailand</div>
                                </div>
                            </div>

                            <div className="international-partners-item">
                                <div className="international-partners-box w-100 h-100 d-flex">
                                    <div className="ip-image"><img src={ipImg3} alt="" /></div>
                                    <div className="ip-content align-self-end">BSUIR – Belarus</div>
                                </div>
                            </div>

                            <div className="international-partners-item">
                                <div className="international-partners-box w-100 h-100 d-flex">
                                    <div className="ip-image"><img src={ipImg4} alt="" /></div>
                                    <div className="ip-content align-self-end">ANU – Ukraine</div>
                                </div>
                            </div>

                            <div className="international-partners-item">
                                <div className="international-partners-box w-100 h-100 d-flex">
                                    <div className="ip-image"><img src={ipImg5} alt="" /></div>
                                    <div className="ip-content align-self-end">Vali-e-Asr University</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerGrid