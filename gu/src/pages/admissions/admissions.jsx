import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admissions.css";
import InnerHeroBg from "../../assets/images/inner-img-15.png";
import seatIcon from "../../assets/images/admission-seat-icon.svg";

const InstitutesNav = ({ institutes, onSelectInstitute }) => {
  return (
    <div className="col-lg-11 mx-auto">
      <ul className="dn-nav-list type-2 d-flex justify-content-start">
        {institutes.length > 0 ? (
          institutes.map((institute) => (
            <li
              key={institute.id}
              className="dn-nav-item"
              onClick={() => onSelectInstitute(institute)}
            >
              <Link to="#" className="dn-nav-link">
                {institute.title}
              </Link>
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

const Admissions = () => {
  const [institutes, setInstitutes] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get(
          "https://ghandhinagaru.shopperbite.com/api/getAllInstitutes/cat/domestic"
        );
        setInstitutes(response.data);
        if (response.data.length > 0) {
          setSelectedInstitute(response.data[0]); // Select the first institute by default
        }
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };

    fetchInstitutes();
  }, []);

  const handleSelectInstitute = (institute) => {
    setSelectedInstitute(institute);
  };

  return (
    <React.Fragment>
      <div
        className="innerherotwo2 admission-inner-hero"
        style={{ backgroundImage: `url(${InnerHeroBg})` }}
      >
        <div className="container hero-container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>
                ‘A school with mind, <br /> heart, and a constant fizz!’
              </h1>
              <p>
                The campus provides a refreshing environment with different
                facilities which makes our students feel at home.
              </p>
              <Link className="btn btn-default" to="/apply">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="container add-index pb-5">
          <div className="row g-1">
            <InstitutesNav
              institutes={institutes}
              onSelectInstitute={handleSelectInstitute}
            />

            <div className="col-lg-12">
              {selectedInstitute && (
                <div className="admission-list-wrapper">
                  <div className="admission-list-head d-flex flex-wrap align-items-start justify-content-between gap-4">
                    <div className="al-head-left">
                      <h3>
                        Gandhinagar Institute of{" "}
                        <span>{selectedInstitute.name}</span>
                      </h3>
                    </div>
                    <div className="al-head-right">
                      <p>
                        Admissions at {selectedInstitute.name} are done through
                        The Admission Committee for Professional Courses (ACPC)
                      </p>
                    </div>
                  </div>

                  {selectedInstitute.course_categories.map((category) => (
                    <div className="admission-row" key={category.id}>
                      <h4>{category.name}</h4>
                      <div className="admission-list d-flex flex-wrap">
                        {category.courses.map((course) => (
                          <div className="admission-item" key={course.id}>
                            <div className="admission-box d-flex flex-column w-100 h-100">
                              <h5>{course.name}</h5>
                              <div className="d-flex align-items-end justify-content-between mt-auto">
                                <div className="admission-seat d-flex align-items-center">
                                  <div className="admission-seat-icon">
                                    <img src={seatIcon} alt="Seats icon" />
                                  </div>
                                  {course.seats}
                                </div>
                                <div className="admission-year">
                                  <span>{course.duration}</span> YEARS
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="al-box">
                    <div className="al-head-right">
                      <div className="fee-list d-flex flex-wrap">
                      {selectedInstitute.course_categories.map((category) => {
                          const course = category.courses[0]; // Access the first course for fee
                          return (
                            <div className="fee-item" key={course.id}>
                              <div className="fee-box">
                                <div className="fee-content">
                                  <h6>{category.name} Fees:</h6>
                                  <h5>Rs. {course.fees}/-</h5>
                                  <p>per semester (FRC approved)</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        
                      </div>
                    </div>
                    <div className="admission-apply-box">
                      <div className="admission-apply-img">
                        <img src="" alt="" />
                      </div>
                      <h5>Found everything cool?</h5>
                      <Link to="/apply" className="btn btn-default">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admissions;
