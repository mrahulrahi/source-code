import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/campusfacility">Campus Facilities</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/international">International</Link></li>
                <li><Link to="/exam">Exam</Link></li>
                <li><Link to="/placements">Placements</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/announcements">Announcements</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/alumni">Alumni</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/mou">Mou</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/iic">Iic</Link></li>
                <li><Link to="/uic">Uic</Link></li>
                <li><Link to="/nisp">Nisp</Link></li>
                <li><Link to="/iqac">Iqac</Link></li>
                <li><Link to="/approvals">Approvals</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/git">Git</Link></li>
                <li><Link to="/gim">Gim</Link></li>
                <li><Link to="/gis">Gis</Link></li>
                <li><Link to="/gia">Gia</Link></li>
                <li><Link to="/gic">Gic</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
