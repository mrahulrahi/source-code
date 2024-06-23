import React from 'react';
import './admissions.css'
import AdmissionCard from '../../components/AdmissionCard/AdmissionCard';
import InnerHeroBg from '../../assets/images/inner-img-11.jpg'

const admissions = () => {
  return (
    <React.Fragment>

      <div className="innerherotwo2 admission-inner-hero" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>‘A school with mind, <br /> heart, and a constant fizz!’</h1>
              <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              <a href="#!" className="btn btn-default">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container pt-0 position-relative">
        <div className="background-image" style={{ backgroundImage: `url(${InnerHeroBg})` }}></div>
        <div className="container add-index">
          <div className="row g-1">
            <div className="col-lg-11 mx-auto">
              <ul className="dn-nav-list type-2 d-flex justify-content-between">
                <li className="dn-nav-item active">
                  <a href="#!" className="dn-nav-link">GIT</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIM</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIS</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GICSA</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIC</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GILS</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIL</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIVS</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIRD</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GID</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIP</a>
                </li>
                <li className="dn-nav-item">
                  <a href="#!" className="dn-nav-link">GIN</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-12">
              <div className="admission-list-wrapper">
                <div className="admission-list-head d-flex flex-wrap align-items-center justify-content-between gap-4">
                  <div className="al-head-left">
                    <h3>Gandhinagar Institute of <span>Technology</span></h3>
                  </div>
                  <div className="al-head-right">
                    <p>Admissions at Gandhinagar University is done through The Admission Committee for Professional Courses (ACPC)</p>
                    <div className="fee-list d-flex flex-wrap">
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admission-row">
                  <h4>Bachelors</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(10)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>Masters</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(4)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>DIPLOMA</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>PhD (Technology)</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-apply-box">
                  <div className="admission-apply-img"><img src="" alt="" /></div>
                  <h5>Found everything cool?</h5>
                  <a href="#!" className="btn btn-default">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-5">
              <div className="admission-list-wrapper blue">
                <div className="admission-list-head d-flex flex-wrap align-items-center justify-content-between gap-4">
                  <div className="al-head-left">
                    <h3>Gandhinagar Institute of <span>Management</span></h3>
                  </div>
                  <div className="al-head-right">
                    <p>Admissions at Gandhinagar University is done through The Admission Committee for Professional Courses (ACPC)</p>
                    <div className="fee-list d-flex flex-wrap">
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admission-row">
                  <h4>BBA</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Bachelor of Business Administration" seat="720" year="3" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>MBA</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(2)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Finance, HR, Marketing, IT" seat="120" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>BGDM</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Hospital & Healthcare Management, Marketing, Finance, HR" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>BBA</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-apply-box">
                  <div className="admission-apply-img"><img src="" alt="" /></div>
                  <h5>Found everything cool?</h5>
                  <a href="#!" className="btn btn-default">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-5">
              <div className="admission-list-wrapper">
                <div className="admission-list-head d-flex flex-wrap align-items-center justify-content-between gap-4">
                  <div className="al-head-left">
                    <h3>Gandhinagar Institute of <span>Science</span></h3>
                  </div>
                  <div className="al-head-right">
                    <p>Admissions at Gandhinagar University is done through The Admission Committee for Professional Courses (ACPC)</p>
                    <div className="fee-list d-flex flex-wrap">
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admission-row">
                  <h4>B.Sc</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(9)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="3" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>B.Sc. (Hons.)</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(7)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>M.Sc</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(8)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>PGDMLT</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="1" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>DMLT</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>PhD (Science)</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-apply-box">
                  <div className="admission-apply-img"><img src="" alt="" /></div>
                  <h5>Found everything cool?</h5>
                  <a href="#!" className="btn btn-default">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-5">
              <div className="admission-list-wrapper blue">
                <div className="admission-list-head d-flex flex-wrap align-items-center justify-content-between gap-4">
                  <div className="al-head-left">
                    <h3>Gandhinagar Institute of <span>Computer Science and Application</span></h3>
                  </div>
                  <div className="al-head-right">
                    <p>Admissions at Gandhinagar University is done through The Admission Committee for Professional Courses (ACPC)</p>
                    <div className="fee-list d-flex flex-wrap">
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                      <div className="fee-item">
                        <div className="fee-box">
                          <div className="fee-content">
                            <h6>Bachelor’s Fees:</h6>
                            <h5>Rs. 31,000/-</h5>
                            <p>per semester (FRC approved)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admission-row">
                  <h4>Bachelor</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(3)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Bachelor of Business Administration" seat="720" year="3" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>BCA</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Hospital & Healthcare Management, Marketing, Finance, HR" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>BCA (Hons.)</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>M.Sc. (Integrated)</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Artificial Intelligence" seat="60" year="4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-row">
                  <h4>PhD</h4>
                  <div className="admission-list d-flex flex-wrap">
                    {[...Array(1)].map((_, index) => (
                      <div className="admission-item" key={index}>
                        <AdmissionCard title="Hospital & Healthcare Management, Marketing, Finance, HR" seat="60" year="2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="admission-apply-box">
                  <div className="admission-apply-img"><img src="" alt="" /></div>
                  <h5>Found everything cool?</h5>
                  <a href="#!" className="btn btn-default">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </React.Fragment>
  )
}

export default admissions