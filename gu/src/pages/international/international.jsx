import React, { useEffect, useState } from 'react';
import './international.css';
import '../../components/InstituteCard/InstituteCard.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import InnerHeroBg from '../../assets/images/inner-img-17.jpg';
import iihCardImg from '../../assets/images/iih-card-img.png';
import iihBottomImg from '../../assets/images/iih-bottom-img.png';
import PartnerGrid from '../../components/PartnerGrid/PartnerGrid';
import iihGraphic1 from '../../assets/images/graduation-cap-img-1.png';
import iihGraphic2 from '../../assets/images/graduation-cap-img-2.png';
import iopCardIcon1 from '../../assets/images/iop-card-icon-1.svg'
import iopCardIcon2 from '../../assets/images/iop-card-icon-2.svg'
import iopCardIcon3 from '../../assets/images/iop-card-icon-3.svg'
import iopBgImg from '../../assets/images/iop-bg-img.svg'


const International = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Fetching data from the API
    fetch('https://ghandhinagaru.shopperbite.com/api/getAllInstitutes/cat/international')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setInstitutes(data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching institutes:', error);
        setError(error);
        setLoading(false); // Stop loading if there’s an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="innerherotwo2 international-inner-hero type3" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="iih-card-box d-flex flex-column flex-md-row justify-content-between">
                  <div className="iih-card-content">
                    <h1>‘A school with mind, <br /> heart, and a constant fizz!’</h1>
                    <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                    <Link className="btn btn-default" to="/contact">Contact Now</Link>
                  </div>
                  <div className="iih-card-img ms-auto ms-md-0"><img src={iihCardImg} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="shadow-box"></div>
          <div className="content-container iih-bottom-container" data-aos="fade-up">
            <div className="iih-bottom-img"><img src={iihBottomImg} alt="" /></div>
            <div className="iih-bottom-graphic-1"><img src={iihGraphic1} alt="" /></div>
            <div className="iih-bottom-graphic-2"><img src={iihGraphic2} alt="" /></div>
            <div className="container add-index">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="iih-bottom-content-box text-center">
                    <h2>‘A school with mind, <br /> heart, and a constant fizz!’</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnerGrid className="bg-blue" />

      <div className="content-container institute-card-container bg-blue">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-11 mx-auto">
              <ul className="dn-nav-list type-3 d-flex justify-content-start">
                {institutes.map((institute) => (
                  <li key={institute.id} className="dn-nav-item">
                    <Link to='' className="dn-nav-link"> {institute.title} </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-11 mx-auto">
              <div className='international-course-data'>
                {institutes.length > 0 && (
                  <div> 
                   {institutes.map((institute) => (
                      <div key={institute.id} className='institute-card-box'>
                        <h4>{institute.title}</h4>
                        <h6><span>Gandhinagar Institute of</span> {institute.name}</h6>
                        
                        {institute.course_categories.map((category) => (
                          <div key={category.id} className="ic-program-row">
                            <h5>{category.name}</h5>
                            <div className='data'>
                              <ul className="icp-list d-flex flex-wrap">
                                {category.course_content_international?.split('\r\n').map((course, index) => (
                                  <li key={index}>{course}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                        <div className="ic-bottom-row d-flex flex-column align-items-end">
                          <p>Admissions at Gandhinagar University are done through The
                          Admission Committee for Professional Courses (ACPC)</p>
                        </div>
                        {/* Separate loop for displaying fees data (Green section) */}
                        <div className="ic-program-list d-flex flex-wrap justify-content-end">
                          {institute.course_categories.map((category) => (
                            <div key={category.id} className="ic-program-item">
                              <div className="ic-program-box w-100 h-100">
                                <h5>{category.name}</h5>
                                <div className="icp-details-wrapper d-flex justify-content-between">
                                  <div className="icp-details-list">
                                    <div className="icp-details-item">
                                      <h6>Tuition Fees:</h6>
                                      <p>{category.fees ? `$${category.fees}` : 'N/A'}</p>
                                    </div>
                                    <div className="icp-details-item">
                                      <h6>Total Package:</h6>
                                      <p>{category.fees ? `$${category.fees * 2}` : 'N/A'}</p>
                                    </div>
                                  </div>
                                  <div className="icp-year"><span>{category.duration}</span> Years</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    ))}

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container international-process-container bg-gold">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9 mx-auto">
              <div className="international-orientation-program-wrapper position-relative">
                <div className="iop-bg-img"><img src={iopBgImg} alt="" /></div>
                <div className="text-center add-index">
                  <div className="heading mb-3">
                    <h4><span>Orientation</span> Program:</h4>
                  </div>
                  <p>The initial days of the newly arrived international students are likely to be the most struggling time. They are to deal with a totally new environment, new friends, a different local public with an unalike language, and changing culture.
                    During this time orientation programs play a vital role to help international students to settle down into an entirely new routine. Such orientation provides general information about the locality, academic practices within the university, and introduction to the academic and administrative process, and library system, it also encourages the students to know each other and lay a foundation of friendships.</p>
                </div>

                <div className="iop-card-list d-flex add-index">
                  <div className="iop-card-item">
                    <div className="iop-card-box d-flex flex-column">
                      <div className='iop-card-icon'><img src={iopCardIcon1} alt="" /></div>
                      <h6>Hostel/Accommodation Facilities & Fees:</h6>
                      <p>The hostel/accommodation fees are already included in the given fee structure.</p>
                      <div className="iop-card-price mt-auto">$1400</div>
                    </div>
                  </div>

                  <div className="iop-card-item">
                    <div className="iop-card-box d-flex flex-column">
                      <div className='iop-card-icon'><img src={iopCardIcon2} alt="" /></div>
                      <h6>Scholarships</h6>
                      <p>Gandhinagar University offers scholarships for all the programs run by the university. The program-wise scholarship is as mentioned in the “Program Details and Tuition Fees.”</p>
                    </div>
                  </div>

                  <div className="iop-card-item">
                    <div className="iop-card-box d-flex flex-column">
                      <div className='iop-card-icon'><img src={iopCardIcon3} alt="" /></div>
                      <h6>Support Services</h6>
                      <p>The hostel/accommodation fees are already included in the given fee structure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="international-hta-wrapper">
                <h3>HOW TO APPLY?</h3>

                <div className="row">
                  <div className="col-lg-11 pe-lg-5">
                    <p>The initial days of the newly arrived international students are likely to be the most struggling time. They are to deal with a totally new environment, new friends, a different local public with an unalike language, and changing culture.
                      During this time orientation programs play a vital role to help international students to settle down into an entirely new routine. Such orientation provides general information about the locality, academic practices within the university, and introduction to the academic and administrative process, and library system, it also encourages the students to know each other and lay a foundation of friendships.</p>
                    <h4>Process:</h4>
                    <p>Follow the step-by-step guidelines given below to be a student of Gandhinagar University – Gujarat, India.</p>
                    <h6>STEP 01:</h6>
                    <p>Register yourself through the below-mentioned link, and choose the study program for which admission is sought for.</p>
                    <p className="mb-0"><b>Link for registration:</b></p>
                    <Link href="#!">Click Here For Registration</Link>
                    <Link href="#!">Click Here For Registration</Link>
                    <p>Application review may take 7 – 10 working days and wait till you get the response from our Admission Verification Team.</p>
                    <p className="mb-0">List of Documents you are required to submit online through the aforementioned link:</p>
                    <ul>
                      <li>Valid proof of Birth date</li>
                      <li>Passport copy</li>
                      <li>1 – Photograph</li>
                      <li>All Educational Qualification Certificates (High school accomplishment certificate/ Diploma/Degree/Master’s degree(s) certificates – depending on study level)</li>
                      <li>Copy of University Transcript (If applicable)</li>
                      <li>In case of international degree mobility, submit an admission letter from the home university.</li>
                    </ul>

                    <h6>STEP 02:</h6>
                    <p>All the submitted documents will be evaluated for the applied study program and verified by the Gandhinagar University Admission Team. <br /> On the basis of the evaluation and response received from the Admission Team, the successful candidates will be issued a Provisional Admission Offer Letter. <br /> A provisional admission offer letter is just to inform you about admission, it is not a valid letter to avail of any travel privilege or to get a valid VISA. <br /> It will also include the details about the remaining documents to be submitted along with the first-year fees for the selected program.</p>

                    <h6>STEP 03:</h6>
                    <p>Your Final Admission Letter and Travel Documents will be issued to the successful candidates only if the documents listed in the Provisional Admissions Offer Letter are provided and the First-year tuition fee is paid.</p>

                    <h6>STEP 04:</h6>
                    <p>An enrolment letter will be issued to the candidate and will be submitted to the concerned high commission through the Ministry of External Affairs to avoid difficulties in getting a VISA for the students enrolled with Gandhinagar University. <br /> For foreign nationals, Gandhinagar University has constituted an International Student Cell. The cell follows the University Grants Commission (UGC) guidelines stipulated for “International Students.” <br /> This cell provides a single-point admission system for international students. Students must register on our website for admission to Gandhinagar University. The objective of this cell is to impart admission and necessary guidance to foreign nationals for securing Visas, and registration with FRRO – The Foreigner Regional Registration Office (FRRO) an Indian government agency responsible for administering foreigner registration and immigration-related functions. The University currently houses International Students from various countries such as Bangladesh, Afghanistan, Fiji, and Mozambique, thereby making it a truly international University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </React.Fragment>
  );
};

export default International;
