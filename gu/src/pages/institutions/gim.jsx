import React from 'react';
import './institutions.css';
import gimVideo from '../../assets/video/gim-video.mp4';
import InstitutionsHero from '../../components/InstitutionsHero/InstitutionsHero'
import CommanHeading from '../../components/heading/commanheading';
import Heading from '../../components/heading/heading';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import Recruiters from '../../components/recruiters/recruiters';
import gimBachelors from '../../data/gimBachelors.json';
import gimMasters from '../../data/gimMasters.json';
import gimPhd from '../../data/gimPhd.json';
import gimPgdm from '../../data/gimPgdm.json';
import InstitutionsAbout from '../../components/InstitutionsAbout/InstitutionsAbout';
import Specializations from '../../components/Specializations/specializations';
import ManBill from '../../assets/images/gimGif.gif';
import { Height } from '@mui/icons-material';


const gim = () => {
    const aboutText = `
        <p>Gandhinagar Institute of Technology (GIT), affiliated to Gandhinagar University is a nationally renowned Institute of higher education, offering world class education in undergraduate and post graduate program in whole range of Technology disciplines. The Institute has been rated as a 4 Star Institute under the GSIRF 2023 (Gujarat State Institutional Ranking Framework). GIT offers UG and PG courses which are approved by AICTE, New Delhi.</p>
        <p>It offers Bachelor level technical program (B.Tech.) in Computer Engineering, Information Technology, Mechanical Engineering, Electronics & Communication Engineering, Electrical Engineering and Civil Engineering. It also offers Master level technical program (M. Tech.) in Computer Engineering with specialization in Software Engineering and M. Tech. in Mechanical Engineering with specialization in Thermal Engineering and CAD / CAM.</p>
        <p>GIT nurtures its students all faceted growth of its students and serves a link between theory and practice using multidisciplinary education by following New Education Policy (NEP – 2020). Academic Regulations</p>
    `;

    return(
        <React.Fragment>
            <div className="overflow-hidden">
                <InstitutionsHero
                    video={gimVideo}
                    ih_Heading="Institute of Management"
                    ih_para="creating an enabling environment of active learning and become a centre of excellence."
                />
               <InstitutionsAbout 
                    Aheadig="About GIT"
                    Apara={aboutText}
                    Aimg={ManBill}
                    AimgWidth="500px"
                    AimgHeight="550px"
                />
            </div>

            <div className="content-container">
                <CommanHeading cheading="Programs" chheading="Offered Under GIM" />  
                <div className="container">  <div className="program-row"> <h5>Bachelors</h5> </div> </div>
                <ProgramRow programs={gimBachelors} />
                <div className="mt-10">
                    <div className="container">  <div className="program-row"> <h5>Masters</h5> </div> </div>
                    <ProgramRow programs={gimMasters} />
                </div>
                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>PGDM</h5>
                        </div>
                    </div>
                    <ProgramRow programs={gimPgdm} />
                    <div className="mt-10">
                        <div className="container">
                            <div className="program-row">
                                <h5>PhD</h5>
                            </div>
                        </div>
                        <ProgramRow programs={gimPhd} />
                    </div>
                </div>
            </div>
            <Heading sheading="OUR" shheading="FACILITIES" spara=" The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home." />
            <FacilityGrid />
            <Recruiters />
            <Specializations />
        </React.Fragment>
  )
}

export default gim