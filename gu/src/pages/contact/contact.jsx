import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contact.css';
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import InnerHeroBg from '../../assets/images/inner-img-12.jpg';
import AuthorityCard from "../../components/AuthorityCard/AuthorityCard";
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactCards from '../../data/contactCard.json';
import contactBG from '../../assets/images/contact-form-bg.png';

const contact = () => {
  const [contacts, setContacts] = useState([]);
  const [primaryContacts, setPrimaryContacts] = useState([]);
  const [instituteContacts, setInstituteContacts] = useState([]);

  useEffect(() => {
    axios.get('https://ghandhinagaru.shopperbite.com/api/getAllContacts')
      .then(response => {
        setContacts(response.data);
        setPrimaryContacts(response.data.filter(contact => contact.category === 'Primary'));
        setInstituteContacts(response.data.filter(contact => contact.category === 'Institutes Contact'));
      })
      .catch(error => {
        console.error('Error fetching contacts data:', error);
      });
  }, []);

  return (
    <React.Fragment>

      <Innerherotwo backgroundImage={InnerHeroBg} title="CONTACT US" />

      <div className="content-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h4 className="uppercase font-extrabold text-center">
                List of Key <span className="text-blue font-black">Authorities</span>
              </h4>
              <div className="authority-card-list flex flex-wrap">
                {primaryContacts.map((contact, index) => (
                  <div className="authority-card-item" key={index}>
                    <AuthorityCard
                      name={contact.name}
                      post={contact.designation || 'N/A'}
                      email={contact.email}
                      phone={contact.phone || 'N/A'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <h4 className="uppercase font-black text-gold text-center">Various Institutes <span className="text-blue">Contact details</span></h4>
              <div className="contact-card-list flex flex-wrap">
                {instituteContacts.map((contact, index) => (
                  <div className="contact-card-item" key={index}>
                    <div className="contact-card-box w-full h-full flex flex-col">
                      <div className="contact-card-institute">{contact.name}</div>
                      <div className="contact-card-name mt-auto">{contact.institute_name || 'N/A'}</div>
                      <div className="contact-card-phone">{contact.phone || 'N/A'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container contact-form-container pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-form-content relative">
                <div className="contact-form-bg">
                  <img src={contactBG} alt="" />
                </div>
                <div className="contact-form-details text-center">
                  <h4>Contact Us</h4>
                  <h5>Gandhinagar University</h5>
                  <address>University Campus, <br />Khatraj-Kalol Road, Moti Bhoyan, <br /> Ta. Kalol, Dist. Gandhinagar, India-382721</address>
                  <div className="cfd-phone">+91 99044 05900</div>
                </div>

                <div className="contact-form-wrapper bg-blue mx-auto">
                  <div className="contact-form-box mx-auto">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="tel" className="form-control" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-2">
                          <textarea className="form-control" placeholder="Your Message"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Agree to terms & conditions.</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="submit" className="btn-form" value="Submit" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </React.Fragment>
  )
}

export default contact
