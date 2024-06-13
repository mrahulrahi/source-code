import React from 'react';
import './contact.css'
import AuthorityCard from "../../components/AuthorityCard/AuthorityCard"
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactCards from '../../data/contactCard.json'
import contactMap from '../../assets/images/contact-map.jpg'
import contactBG from '../../assets/images/contact-form-bg.png'

const contact = () => {
  return (
    <React.Fragment>

      <div className="content-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h4 className="uppercase font-extrabold text-center">List of Key <span className="text-blue font-black">Authorities</span></h4>
              <div className="authority-card-list flex flex-wrap">
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
                <div className="authority-card-item">
                  <AuthorityCard name="Prof. Nirav Joshi" post="Deputy Registrar (Administrative)" email="dradmin@gandhinagaruni.ac.in" phone="+91 7069088191" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <h4 className="uppercase font-black text-gold text-center">various Institutes <span className="text-blue">Contact details</span></h4>
              <div className="contact-card-list flex flex-wrap">
                {ContactCards.map((card) => (
                  <div className="contact-card-item">
                    <ContactCard institute={card.institute} name={card.name} phone={card.phone} />
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
                <div className="row flex-column g-3 px-2">
                <div className="col-sm-9 mx-auto">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-sm-9 mx-auto">
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-sm-9 mx-auto">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-9 mx-auto">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-9 mx-auto">
                  <div className="form-group ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">Agree to terms & conditions.</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9 mx-auto">
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
        <div className="contact-map-wrapper">
          <img src={contactMap} alt="" />
        </div>
      </div>

    </React.Fragment>
  )
}

export default contact