import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom'
import twitter from '../../assets/images/twitter-icon.svg';
import facebook from '../../assets/images/facebook-icon.svg';
import youtube from '../../assets/images/youtube-icon.svg';
import linkedin from '../../assets/images/linkedin-icon.svg';
import instagram from '../../assets/images/instagram-icon.svg';
import whatsapp from '../../assets/images/whatsapp-icon.svg';
import logo from '../../assets/images/logo.svg';
import address from '../../assets/images/address-icon.svg';
import phone from '../../assets/images/call-icon.svg';
import mail from '../../assets/images/global-icon.svg';
import footerbg from '../../assets/images/footer-bg-icon.svg';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div id="footer">
        <div className="footer-upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-upper-content">
                  <div className="fuc-left">
                    <div className="fuc-logo">
                      <img src={logo} alt="footer-logo" />
                    </div>
                    <div className="fuc-address-box">
                      <ul className="fab-list">
                        <li className='fab-item'> <img src={address} alt="" /> Khatraj – Kalol Road, Moti Bhoyan, <br /> Tal. Kalol, Dist. Gandhinagar-382721. </li>
                        <li className='fab-item'> <Link to='/'> <img src={phone} alt="" />  +91 9904405900 / +91 27642 81862 </Link>   </li>
                        <li className='fab-item'> <Link to='/'> <img src={mail} alt="" /> director@git.org.in  </Link> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fuc-right">
                     <div className="fr-content-box">
                         <div className="fubi-heading"> <Link to="/about"> About Us </Link> </div>
                         <div className="fcb-list">
                            <div className="fub-item"> 
                                <div className="fi-link"> <Link to="/campusfacility"> Campus Facilities </Link>  </div>
                                <div className="fi-link"> <Link to="/admissions"> Admissions </Link> </div>
                                <div className="fi-link"> <Link to="/international"> Internationals </Link> </div>
                                <div className="fi-link"> <Link to="/exam"> Exams </Link> </div>
                                <div className="fi-link"> <Link to="/placements"> Placements </Link> </div>
                                <div className="fi-link"> <Link to="/activities"> Activity </Link> </div>
                                <div className="fi-link"> <Link to="/gallery"> Gallery </Link> </div>
                                <div className="fi-link"> <Link to="/announcements"> Announcements </Link> </div>
                                <div className="fi-link"> <Link to="/contact"> Contact Us </Link> </div>
                            </div>
                            <div className="fub-item"> 
                                 <div className="fubi-box-list">
                                     <div className="fubi-box-item">
                                         <div className="fi-link"> <Link to="/alumni"> Alumni </Link>  </div>
                                         <div className="fi-link"> <Link to="/"> GIT Helpline for COVID-19 </Link> </div>
                                         <div className="fi-link"> <Link to="/publications"> Publications </Link> </div>
                                         <div className="fi-link"> <Link to="/mou"> MOU </Link> </div>
                                         <div className="fi-link"> <Link to="/achievements"> Achievements </Link> </div>
                                         <div className="fi-link"> <Link to="/uic"> UIC </Link> </div>
                                     </div>
                                     <div className="fubi-box-item">
                                         <div className="fi-link"> <Link to="/iic"> IIC </Link>  </div>
                                         <div className="fi-link"> <Link to="/nisp"> NISP </Link> </div>
                                         <div className="fi-link"> <Link to="/iqac"> IQAC </Link> </div>
                                         <div className="fi-link"> <Link to="/approvals"> Approvals </Link> </div>
                                         <div className="fi-link"> <Link to="/career"> Career </Link> </div>
                                     </div>
                                 </div>
                            </div>
                            <div className="fub-item"> 
                                <div className="fi-link"> <Link to="/admissions"> Admissions </Link>  </div>
                                <div className="fi-link"> <Link to="/"> Scholarships and Grants </Link> </div>
                                <div className="fi-link"> <Link to="/"> Student Finance </Link> </div>
                                <div className="fi-link"> <Link to="/"> Experience MDX Dubai </Link> </div>
                                <div className="fi-link"> <Link to="/"> Student Visa </Link> </div>
                                <div className="fi-link"> <Link to="/"> GU Accommodation </Link> </div>
                            </div>
                            <div className="fub-item"> 
                                <div className="fi-link"> <Link to="/"> Privacy Policy </Link>  </div>
                                <div className="fi-link"> <Link to="/"> Terms and Conditions </Link> </div>
                                <div className="fi-link"> <Link to="/"> Cookie Policy </Link> </div>
                            </div>
                         </div>
                     </div>
                  </div>
                </div>
                <div className="fu-link-box">
                  <ul className='fu-link-list'>
                    <li className='fu-link-item'> <Link to='/'> <img src={twitter} alt="Twitter" /> Twitter </Link>  </li>
                    <li className='fu-link-item'> <Link to='/'> <img src={facebook} alt="Facebook" /> Facebook </Link> </li>
                    <li className='fu-link-item'> <Link to='/'> <img src={youtube} alt="YouTube" /> YouTube </Link> </li>
                    <li className='fu-link-item'> <Link to='/'> <img src={linkedin} alt="LinkedIn" /> LinkedIn </Link> </li>
                    <li className='fu-link-item'> <Link to='/'>  <img src={instagram} alt="Instagram" /> Instagram </Link> </li>
                    <li className='fu-link-item'> <Link to='/'> <img src={whatsapp} alt="WhatsApp" /> WhatsApp </Link> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copy-text">&copy; Copyright GU {currentYear}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg" style={{ backgroundImage: `url(${footerbg})` }}> </div>
      </div>
      <ScrollToTop />
    </React.Fragment>
  );
}

export default Footer;
