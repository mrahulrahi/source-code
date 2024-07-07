import React from 'react';
import './alumni.css';
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import inner8 from '../../assets/images/inner-img-8.jpg';
import flaglogo from '../../assets/images/flaglogo-icon.svg';
import AlumniFlag from '../../components/AlumniFlag/AlumniFlag';
import alumni1 from '../../assets/images/alumni-img-1.jpg';
import alumni2 from '../../assets/images/alumni-img-2.jpg';
import alumni3 from '../../assets/images/alumni-img-3.jpg';

const Alumni = () => {
  return (
    <React.Fragment>
      <Innerherotwo backgroundImage={inner8} title="ALUMNI" />
      <div className="content-container blue-bg pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="alumni-head">
                <div className="ah-head">
                  <div className="ahh-icon">
                    <img src={flaglogo} alt="" />
                  </div>
                  <div className="ahh-text">
                    <h4>GANDHINAGAR UNIVERSITY</h4>
                    <h5>ALUMNI ASSOCIATION</h5>
                  </div>
                </div>
                <div className="ah-body">
                  <div className="ahb-para">
                    GU Alumni Association is a Vibrant Alumni Community where you can keep in touch and strengthen bond with your Alma Mater and grow your Social and Professional Network for various opportunities least of which are
                  </div>
                </div>
                <div className="ah-footer">
                  <div className="ahf-card-list">
                    <div className="ahf-card-item">
                      <div className="aci">Knowledge and Resource Sharing</div>
                    </div>
                    <div className="ahf-card-item">
                      <div className="aci">Participate in various Placement Openings</div>
                    </div>
                    <div className="ahf-card-item">
                      <div className="aci">Access Alumni Database</div>
                    </div>
                    <div className="ahf-card-item">
                      <div className="aci">Give and Get Advice for Career Development</div>
                    </div>
                    <div className="ahf-card-item">
                      <div className="aci">Enhance your Learning Experience</div>
                    </div>
                    <div className="ahf-card-item">
                      <div className="aci">Celebrate and Socialize</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlumniFlag
        imgSrc={alumni1}
        title="ALUMNI MEET"
        description="Alumni Meet provides a platform to alumni where they can share their experiences and revive the memories of their college days with their family. As a celebration, a cultural night including folk songs and traditional folk dances along with Gala dinner is organized which overwhelms the audience with the feeling of bonding with their roots. Also, an award ceremony is organized to recognize and honour distinguished alumni for their achievements and contributions."
        additionalClassName="tc"
      />
      <AlumniFlag
        imgSrc={alumni2}
        title="ALUMNI TALKS AND WEBINARS"
        description="The objective of the Alumni Talk is to organize interactions between students and alumni for career development, skills needed for grasping better opportunities and enhancing social networking. Alumni inspire the students with the success story of their career journey and how failures can be converted into opportunities. Alumni guide the students about recent industry scenarios and give tips on how to nurture the technical and professional expertise."
      />
      <AlumniFlag
        imgSrc={alumni3}
        title="ALUMNI WORKSHOPS"
        description="Workshops and expert sessions by alumni are organized to encourage the students for developing technical expertise, know about recent industry trends, and give more focused efforts in their respective fields."
        additionalClassName="tf"
      />
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="alumni-data text-blue">
                <h4>GIT ALUMNI ASSOCIATION</h4>
                <h5>JOINING PROCEDURE</h5>
                <ul className="al-list">
                  <li className="al-item">1. Former or current students of GIT can contact GITAA committee members and fill up a membership form either in hardcopy or softcopy along with membership fees of Rs 500 to join GIT alumni association.</li>
                  <li className="al-item">2. GITAA members have exclusive benefits like participation in all GIT events (including Alumni Meet, Techxtreme, Jazba and Ratri B4 Navratri) with spouse and children free of cost.</li>
                  <li className="al-item">3. Hardcopy/Google form of membership form is available with committee members.</li>
                  <li className="al-item">4. A good quality photograph is to be attached with the form before submitting to committee members.</li>
                  <li className="al-item">5. Payment of membership fees of Rs 500 can be done in 3 modes: cash, CMD or online transaction.</li>
                  <li className="al-item">6. Cash must be submitted to committee members and receipt is to be collected from them.</li>
                  <li className="al-item">7. Current students can opt for deduction of membership fees from caution money. For this, students must fill and sign the CMD form available with the committee members.</li>
                  <li className="al-item">8. For online payment, transaction must be done in the following account and transaction ID is to be mentioned in the Google form of membership</li>
                </ul>
                <div className="al-card">
                    <h4> Bank of Baroda </h4>
                    <p> Platinum Foundation </p>
                    <div className="alc-list">
                        <div className="alc-item"> A/No : <strong>  77960200002381 </strong> </div>
                        <div className="alc-item"> IFSC : <strong> BARB0VJRELI </strong> </div>
                        <div className="alc-item"> MICR : <strong> 380012187 </strong> </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Alumni;
