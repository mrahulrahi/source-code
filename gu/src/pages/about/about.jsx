import React from 'react';
import './about.css';
import Specializations from '../../components/Specializations/specializations';
import InnerHeroBg from '../../assets/images/inner-img-16.jpg';
import { Link } from 'react-router-dom';
import Inco1 from '../../assets/images/Inco1.svg';
import Inco2 from '../../assets/images/Inco2.svg';
import Inco3 from '../../assets/images/Inco3.svg';
import Inco4 from '../../assets/images/Inco4.svg';
import Inco5 from '../../assets/images/Inco5.svg';
import schoolImg from '../../assets/images/school-student.png';
import schoolIcon1 from '../../assets/images/school-notics-icon-1.svg';
import schoolIcon2 from '../../assets/images/school-notics-icon-2.svg';
import faciltiesBg from '../../assets/images/facilities-bg.jpg';
import faciltiesImg from '../../assets/images/facilities-img.png';
import faciltiesImg2 from '../../assets/images/facilities-img2.png'

const about = () => {
  return (
    <React.Fragment>

       <div className="innerherotwo2 admission-inner-hero bottom-shadow" style={{ backgroundImage: `url(${InnerHeroBg})` }}>
          <div className="container hero-container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>‘A school with mind, <br /> heart, and a constant fizz!’</h1>
                <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
                <Link to='/' className="btn btn-default">Apply Now</Link>
              </div>
            </div>
          </div>
       </div>
       
       <div className="content-container about-container text-blue">
           <div className="container">
               <div className="row">
                   <div className="col-lg-8 mx-auto">
                      
                      <div className="about-para">
                          <h4> ‘A school with mind, <br/> heart, and a constant fizz!’</h4>
                          <p> The Gandhinagar University established under the Gujarat Private Universities Act, 2009 is, committed to excellence in education with high quality pedagogy and dedicated to promoting the all-faceted development of the students. </p>
                          <p> Gandhinagar University is empowering young minds by imparting quality education, research, and training. Its special emphasis on a multidisciplinary and skill-based approach as outlined in the New Education Policy NEP 2020 sets apart as a pioneer in the field of higher education. This is University in its correct perspective, integrated ecosystem of education – by offering programmes under one roof. </p>
                          <p> Providing more than ten diverse disciplines and ninety course of study along with lush green campus, sports pavilion, modern resource centre is conducive to continuous learning to become all round competent individual for nation building. </p>
                      </div>

                   </div>
               </div>
           </div>
       </div>

       <div className="content-container blue-linear">
           <div className="container">
               <div className="row">
                  <div className="col-lg-10 mx-auto">
                      <div className="inco-list">
                          <div className="inco-item"> 
                             <div className="inco-img">  <img src={Inco1} alt="" />  </div> 
                             <div className="inco-text">  
                                 <h4> Best Quality Infrastructure & Digital Resources </h4>
                             </div>
                          </div>
                          <div className="inco-item"> 
                             <div className="inco-img">  <img src={Inco2} alt="" />  </div> 
                             <div className="inco-text">  
                                 <h4> Quality in Teaching & Student Development </h4>
                             </div>
                          </div>
                          <div className="inco-item"> 
                             <div className="inco-img">  <img src={Inco3} alt="" />  </div> 
                             <div className="inco-text">  
                                 <h4> Relevant Curriculum on a Local, National & Global Levels </h4>
                             </div>
                          </div>
                          <div className="inco-item"> 
                             <div className="inco-img">  <img src={Inco4} alt="" />  </div> 
                             <div className="inco-text">  
                                 <h4> Highest academic degree value upon Graduation </h4>
                             </div>
                          </div>
                          <div className="inco-item"> 
                             <div className="inco-img">  <img src={Inco5} alt="" />  </div> 
                             <div className="inco-text">  
                                 <h4> Top quality research and innovation Initiatives </h4>
                             </div>
                          </div>
                      </div>
                  </div>
               </div>
           </div>
       </div>

       <div className="content-container school-lable text-blue">
          <div className="container">
             <div className="row">

                    <div className="col-lg-6 offset-lg-1">
                        <div className="school-text">
                            <h4> ‘A school with mind, <br/> heart, and a constant fizz!’ </h4>
                            <p> To strengthen multi-disciplinary, technology-enabled education; promote research for innovation and excellence; train students as responsible future citizens who will strive towards creating a sustainable society </p>
                            <p> To provide affordable quality education, while equipping students with knowledge and skills in their chosen stream, inculcate values, identify hidden talents, provide opportunities for students to realize their full potential and thus shape them into future leaders, entrepreneurs and above all good human beings. </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="school-img"> <img src={schoolImg} alt="" /> </div>
                    </div>

             </div>
          </div>
       </div>

       <div className="content-container school-notics text-white">
           <div className="container">
               <div className="row">
                   <div className="col-lg-11 offset-lg-1">

                       <div className="school-notics-text">
                           <h4>  Engineering Specializations Aligned <br/> <span>  With The Industry Needs </span>  <br/> Programs Offered Under GIT </h4> 
                           <div className="school-box">
                               <img className='school-icon1' src={schoolIcon1} alt="" />
                               <img className='school-icon2' src={schoolIcon2} alt="" />
                               <h5> ‘A school with mind, <br />  heart, and a constant fizz!’ </h5>
                               <p> A school with mind, heart, and a constant fizz!’</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="content-container text-blue">
           <div className="container">
               <div className="row">
                   <div className="col-lg-11 mx-auto">

                       <div className="facilities-heading">
                           <h4><span>OUR</span> FACILITIES</h4>
                           <p> The campus provides a refreshing environment with <br/> different facilities which makes our students feel at home.  </p>
                       </div>

                       <ul className='facilities-list'>
                          <li className='facilities-item' style={{ backgroundImage: `url(${faciltiesBg})` }}> 
                              <div className="facilities-box">
                                  <div className="fb-img">
                                      <img src={faciltiesImg} alt="" />
                                  </div>
                                  <div className="fb-text"> 
                                    <div className=''>
                                      <h4> ‘“The basic principle of transforming society is by transforming education.”’ </h4>
                                      <p> To strengthen multi-disciplinary, technology-enabled education; promote research for innovation and excellence; train students as responsible future citizens who will strive towards creating a sustainable society.</p>
                                    </div>
                                      <div className="fb-lable">
                                          <h5> Shri Hareshbhai Rohera </h5>
                                          <p>President, Gandhinagar University</p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className='facilities-item' style={{ backgroundImage: `url(${faciltiesBg})` }}> 
                              <div className="facilities-box">
                                  <div className="fb-img">
                                      <img src={faciltiesImg2} alt="" />
                                  </div>
                                  <div className="fb-text"> 
                                    <div className=''>
                                      <h4> ‘“The basic principle of transforming society is by transforming education.”’</h4>
                                      <p> To strengthen multi-disciplinary, technology-enabled education; promote research for innovation and excellence; train students as responsible future citizens who will strive towards creating a sustainable society.</p>
                                    </div>
                                      <div className="fb-lable">
                                          <h5>Ms. Vinita Rohera</h5>
                                          <p>Vice President, Gandhinagar University</p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className='facilities-item' style={{ backgroundImage: `url(${faciltiesBg})` }}> 
                              <div className="facilities-box">
                                  <div className="fb-img">
                                      <img src={faciltiesImg2} alt="" />
                                  </div>
                                  <div className="fb-text"> 
                                    <div className=''>
                                      <h4> ‘“The basic principle of transforming society is by transforming education.”’ </h4>
                                      <p> To strengthen multi-disciplinary, technology-enabled education; promote research for innovation and excellence; train students as responsible future citizens who will strive towards creating a sustainable society.</p>
                                    </div>
                                      <div className="fb-lable">
                                          <h5>Prof. Dr. K. N. Sheth</h5>
                                          <p>Vice Chancellor, Gandhinagar University</p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                       </ul>

                      
                   </div>
               </div>
           </div>
       </div>

       <div className="content-container pb-0">
          <Specializations />
       </div>

    </React.Fragment>
  )
}

export default about