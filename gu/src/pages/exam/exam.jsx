import React, { useEffect, useState } from "react";
import axios from "axios";
import './exam.css'
import InnerHeroBg from '../../assets/images/inner-img-13.jpg'
import ExamCardImg from '../../assets/images/exam-flag-icon.svg'
import ExamScheduleBg from '../../assets/images/exam-flag-icon.svg'

const exam = () => {
  
    const [examsCategory1, setExamsCategory1] = useState([]);
  
    useEffect(() => {
      // Fetch exams for category 1
      axios.get('https://ghandhinagaru.shopperbite.com/api/getExamsByCategory/1')
        .then(response => {
          setExamsCategory1(response.data);
        })
        .catch(error => {
          console.error('Error fetching exams for category 1:', error);
        });
  
       }, []);

       const [examsCategory, setExamsCategory] = useState([]);

    useEffect(() => {
      axios.get('https://ghandhinagaru.shopperbite.com/api/getAllExamCategory')
        .then(response => {
          setExamsCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching exam categories:', error);
        });
    }, []);
  

  return (
    <React.Fragment>

      <div className="innerherotwo2" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ih-exam-card position-relative">
                <div className="ih-ec-img">
                  <img src={ExamCardImg} alt="" />
                </div>
                <div className="ih-ec-content">
                  <h3>‘A school with mind, heart, and a constant fizz!’</h3>
                  <a href="#!" className="btn btn-default">See Results Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container exam-schedule-container" >
        <div className="exam-schedule-bg"><img src={ExamScheduleBg} alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <h4>EXAM <span className="text-blue">SCHEDULE</span></h4>
              

                

                <div className="exam-schedule-container">
                <div className="row g-4">
                  {examsCategory.map((category, index) => (
                    <div className="col-sm-6 col-lg-4 " key={index}>
                      <div className="exam-schedule-col-box position-relative" key={index}>
                        <div className="esc-img"><img src={ExamCardImg} alt="" /></div>
                        <div className="esc-content">
                          <div className="esc-top-label">{category.decription}</div>
                          <h5>{category.title}</h5>
                          <div className="exam-schedule-list">
                            {examsCategory1.map((exam) => (
                              <div className="exam-schedule-item" key={exam.id}>
                                <div className="exam-schedule-box d-flex align-items-center">
                                  <div className="esb-date">{exam.title}</div>
                                  <div className="esb-content">{exam.description}</div>
                                </div>
                              </div>
                            ))}


                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default exam

