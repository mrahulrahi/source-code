import React from 'react';
import Innerhero from '../../components/innerhero/innerhero';
import inner1 from '../../assets/images/inner-img-1.jpg';

const iic = () => {
  return (
    <React.Fragment>

      <Innerhero backgroundImage={inner1} title="Institution’s Innovation Council" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="iqac-head text-center">
                <div>
                  <h4>National innovation and start-up policy (NISP)</h4>
                  <p>Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes.</p>
                  <p>MIC has envisioned encouraging creation of ‘Institution’s Innovation Council (IIC)’ across selected HEIs. Gandhinagar University is one such selected HEI since 2019. A network of these IICs is established to promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campuses.</p>
                </div>

                <div className="iqac-btn-wrap"><a href="#!" className="btn btn-gold-outline">IIC Policy</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container pt-0 text-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <h4>Objectives</h4>
              <ul>
                <li>To create a vibrant local innovation ecosystem.</li>
                <li>Start-up supporting Mechanism in HEIs.</li>
                <li>Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework.</li>
                <li>Establish a Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.</li>
                <li>Develop better Cognitive Ability for Technology Students.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container pt-0 text-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <h4>Functions of IICs</h4>
              <ul>
                <li>To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion.</li>
                <li>Identify and reward innovations and share success stories.</li>
                <li>Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
                <li>Network with peers and national entrepreneurship development organizations.</li>
                <li>Create an Institution’s Innovation portal to highlight innovative projects carried out by institution’s faculty and students.</li>
                <li>Organize Hackathons, idea competition, mini challenges etc. with the involvement of industries.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container text-container light-bg-text-container">
      <div className="background-image" style={{backgroundImage: `url(${inner1})`}}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="heading text-center">
                <h4>Activities</h4>
              </div>

              <ul>
                <li>IIC in collaboration with the WDC organised a webinar of ‘GCCI Women Start-up Program “Atmanirbhar Nari” under the banner of iHUB and Gujrat Chamber of Commerce on 7th of May 2021, Friday.</li>
                <li>MIC session “Why IP is important in academia?” organised on 26th April 2021.</li>
                <li>Ministry of Education (MoE) organised a talk on “From your Ph.D./ Masters Thesis to a start-up” to convince attendees that their skills are valuable to be an entrepreneur on 23rd April 2021.</li>
                <li>The session on “Orientation session for all students by Innovation Ambassador” organized on 29th January 2021 by Innovation Ambassadors.</li>
                <li>MIC session “National Webinar on Research, Innovation, and Ranking” organized on 11th August 2021.</li>
                <li>GIT- IIC Cell along with SSIP Cell and Hackathon had organized a session on “Prototype Validation- Converting Prototype into a Startup” for students on 01/07/2021. The objective was to make students aware regarding conversion of an idea to startup. Students of Gandhinagar Institute of Technology had attended this talk. It was a very interesting session with extremely rich content, where prototyping validation was also covered along with the prototyping.</li>
                <li>IIC has successfully completed all the 3 activities on the World Entrepreneur’s Day celebration on 24/8/2021. The entrepreneur day celebration started with a healthy panel discussion with students on start-ups and innovative prototypes, faculty/staff entrepreneurs. This followed with the poster-making competition on entrepreneurship where students showcased their creativity. At the end of the day, Mr. Yash Sharma founder and C.E.O of Xatch Software guided and talked about the journey, success, failure and hindrance faced by the entrepreneurs. The events were remarkable and fulfilled their purpose towards the Entrepreneurship details.</li>
                <li>GIT IIC Cell in collaboration with SSIP Cell, IPR Cell and IQAC Cell has organized Impact lecture sessions on 24/9/21 and 5/10/21. The event was sponsored by the Ministry of Education and AICTE. Day-1 of the session comprised of webinar on Innovation and Design Thinking, conducted by Mr. Karmjitsinh Bihola and a webinar on IPR, conducted by Mr. Amit Patel. Day-2 of the session comprised of webinar on Startup, conducted by Mr. Darshak Doshi and Mr. Shravan Rajpurohit, founder and co-founder of Intellify Pvt. Ltd. and a webinar on Entrepreneurship, conducted by Mr. Satya Ranjan Acharya, director at a Technology Business Incubator. More than 200 Students and faculties enthusiastically participated in the event making it a grand success.</li>
                <li>Received 3.5 Star Ranking in Institutions’ Innovation Council (2020-21) Annual Performance.</li>
              </ul>
              <p>For more information visit <a href="#!" className="link-outline"> https://www.mic.gov.in/iic.html</a></p>

              <div className="card-list d-flex flex-wrap">
                <div className="card-item">
                  <div className="card-box d-flex flex-column w-100 h-100">
                    <h6>IIC- Meetings</h6>
                    <ul>
                      <li><a href="#!">2nd IIC Meeting Minutes</a></li>
                      <li><a href="#!">1st IIC Meeting Minutes</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-item">
                  <div className="card-box d-flex flex-column w-100 h-100">
                    <div className="card-post">IIC Coordinator</div>
                    <h6>Ms. Hetal Shah</h6>
                    <div className="card-department">Coordinator Institution’s
                      Innovation Council</div>
                    <div className="card-email mt-auto">Email: iic@gandhinagaruni.ac.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default iic