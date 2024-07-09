import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/menu-icon.svg';
import Drawer from '@mui/material/Drawer';
import CloseMenu from '../../assets/images/close-icon.svg';
import nirf from '../../assets/images/nirf-icon.png';
import arlla from '../../assets/images/arlla-icon.png';
import twitter from '../../assets/images/twitter-icon.svg';
import facebook from '../../assets/images/facebook-icon.svg';
import youtube from '../../assets/images/youtube-icon.svg';
import linkedin from '../../assets/images/linkedin-icon.svg';
import instagram from '../../assets/images/instagram-icon.svg';
import whatsapp from '../../assets/images/whatsapp-icon.svg';
import flag from '../../assets/images/flag-icon.svg';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <React.Fragment>
      <div id='header'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="header-logo">
                  <Link to="/"> <img src={logo} alt="logo" /> </Link>
                </div>
                <div className="header-menu-icon">
                  <Link onClick={toggleDrawer(true)}> <img src={menuIcon} alt="logo" /> </Link>
                </div>
                <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                  <div className="menu-content-box">
                    <div className="menu-inner-head">
                      <div className="mcb-logo"> <Link to='/' onClick={toggleDrawer(false)}>  <img src={logo} alt="logo" /> </Link> </div>
                      <Link className='mcb-close' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}> <img src={CloseMenu} alt="" /> </Link>
                    </div>
                    <div className="mih-menu-box">
                      <div className="mmb-left">
                        <div className="mmb-nav-link-box">
                          <div className="mnlb-link-list">
                            <div className="mnlb-link-item">
                              <ul className='mli-list'>
                                <li className='mli-item'> <Link to='/about' onClick={toggleDrawer(false)}> About GU </Link> </li>
                                <li className='mli-item'> <Link to='/' onClick={toggleDrawer(false)}> Institutions </Link> </li>
                                <li className='mli-item'> <Link to='/campusfacility' onClick={toggleDrawer(false)}> Campus Facilities </Link> </li>
                                <li className='mli-item'> <Link to='/admissions' onClick={toggleDrawer(false)}> Admissions </Link> </li>
                                <li className='mli-item'> <Link to='/international' onClick={toggleDrawer(false)}> Internationals </Link> </li>
                                <li className='mli-item'> <Link to='/exam' onClick={toggleDrawer(false)}> Exams </Link> </li>
                                <li className='mli-item'> <Link to='/placements' onClick={toggleDrawer(false)}> Placements </Link> </li>
                                <li className='mli-item'> <Link to='/activities' onClick={toggleDrawer(false)}> Activity </Link> </li>
                                <li className='mli-item'> <Link to='/gallery' onClick={toggleDrawer(false)}> Gallery </Link> </li>
                                <li className='mli-item'> <Link to='/announcements' onClick={toggleDrawer(false)}> Announcements </Link> </li>
                                <li className='mli-item'> <Link to='/contact' onClick={toggleDrawer(false)}> Contact Us </Link> </li>
                                <li className='mli-item'> <Link to='/git' onClick={toggleDrawer(false)}> Git </Link> </li>
                                <li className='mli-item'> <Link to='/gim' onClick={toggleDrawer(false)}> Gim </Link> </li>
                              </ul>
                            </div>
                            <div className="mnlb-link-item">
                              <ul className='mli-list'>
                                <li className='mli-item'> <Link to='/alumni' onClick={toggleDrawer(false)}> Alumni </Link> </li>
                                <li className='mli-item'> <Link to='/' onClick={toggleDrawer(false)}> GIT Helpline for COVID-19 </Link> </li>
                                <li className='mli-item'> <Link to='/publications' onClick={toggleDrawer(false)}> Publications </Link> </li>
                                <li className='mli-item'> <Link to='/mou' onClick={toggleDrawer(false)}> MOU </Link> </li>
                                <li className='mli-item'> <Link to='/achievements' onClick={toggleDrawer(false)}> Achievements </Link> </li>
                                <li className='mli-item'> <Link to='/uic' onClick={toggleDrawer(false)}> UIC </Link> </li>
                                <li className='mli-item'> <Link to='/iic' onClick={toggleDrawer(false)}> IIC </Link> </li>
                                <li className='mli-item'> <Link to='/nisp' onClick={toggleDrawer(false)}> NISP </Link> </li>
                                <li className='mli-item'> <Link to='/iqac' onClick={toggleDrawer(false)}> IQAC </Link> </li>
                                <li className='mli-item'> <Link to='/approvals' onClick={toggleDrawer(false)}> Approvals </Link> </li>
                                <li className='mli-item'> <Link to='/career' onClick={toggleDrawer(false)}> Career </Link> </li>
                                <li className='mli-item'> <Link to='/gis' onClick={toggleDrawer(false)}> Gis </Link> </li>
                                <li className='mli-item'> <Link to='/gia' onClick={toggleDrawer(false)}> Gia </Link> </li>
                                <li className='mli-item'> <Link to='/gic' onClick={toggleDrawer(false)}>Gic </Link> </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mmb-right">
                        <div className="mr-content-box">
                          <div className="mr-logo-box">
                            <div className="mlb-logo"> <img src={nirf} alt="" /> </div>
                            <div className="mlb-logo"> <img src={arlla} alt="" /> </div>
                          </div>
                        </div>
                        <div className="mr-btn-box">
                          <button className='mr-btn'> Download Brochures </button>
                        </div>
                        <div className="mr-address-box">
                          <div className="mab-address"> Khatraj – Kalol Road, Moti Bhoyan, <br />Tal. Kalol, Dist. Gandhinagar-382721. </div>
                          <div className="mab-phone"> <Link to='/'> +91 9904405900 / +91 27642 81862 </Link> </div>
                          <div className="mab-mail"> <Link to='/'> admission@gandhinagaruni.ac.in </Link> </div>
                        </div>
                        <div className="nav-social-link-box">
                          <ul className='nslb-link-list'>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={twitter} alt="twitter" /> </Link> </li>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={facebook} alt="facebook" /> </Link> </li>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={youtube} alt="youtube" /> </Link> </li>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={linkedin} alt="linkedin" /> </Link> </li>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={instagram} alt="instagram" /> </Link> </li>
                            <li className='nslb-link-item'> <Link to='/' onClick={toggleDrawer(false)}> <img src={whatsapp} alt="whatsapp" /> </Link> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="menu-logo-line">
                      <div className="mll-icon"> <img src={flag} alt="" /> </div>
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
