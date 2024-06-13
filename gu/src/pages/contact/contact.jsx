import React from 'react';
import './contact.css'
import AuthorityCard from "../../components/AuthorityCard/AuthorityCard"
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactCards from '../../data/contactCard.json'

const contact = () => {
  return (
    <React.Fragment>

      <div className="content-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
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
            <div className="col-lg-11 mx-auto">
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

    </React.Fragment>
  )
}

export default contact