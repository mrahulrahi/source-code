import React from 'react';
import './institutions.css';
import giaVideo from '../../assets/video/gia-video.mp4';
import InstitutionsHero from '../../components/InstitutionsHero/InstitutionsHero';
import CommanHeading from '../../components/heading/commanheading';
import Heading from '../../components/heading/heading';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import Recruiters from '../../components/recruiters/recruiters';
import InstitutionsAbout from '../../components/InstitutionsAbout/InstitutionsAbout';
import Specializations from '../../components/Specializations/specializations';

import giaBca3 from '../../data/giaBca3.json';
import giaBca4 from '../../data/giaBca4.json';
import giaBsc from '../../data/giaBsc.json';
import giaMsc from '../../data/giaMsc.json';
import droneImg from '../../assets/images/flying-drone-img.png';

const Gia = () => {
    const aboutText = `
        <p>Gandhinagar Institute of Technology (GIT), affiliated to Gandhinagar University is a nationally renowned Institute of higher education, offering world class education in undergraduate and post graduate program in whole range of Technology disciplines. The Institute has been rated as a 4 Star Institute under the GSIRF 2023 (Gujarat State Institutional Ranking Framework). GIT offers UG and PG courses which are approved by AICTE, New Delhi.</p>
        <p>It offers Bachelor level technical program (B.Tech.) in Computer Engineering, Information Technology, Mechanical Engineering, Electronics & Communication Engineering, Electrical Engineering and Civil Engineering. It also offers Master level technical program (M. Tech.) in Computer Engineering with specialization in Software Engineering and M. Tech. in Mechanical Engineering with specialization in Thermal Engineering and CAD / CAM.</p>
        <p>GIT nurtures its students all faceted growth of its students and serves a link between theory and practice using multidisciplinary education by following New Education Policy (NEP – 2020). Academic Regulations</p>
    `;

    return (
        <React.Fragment>
            <div className="overflow-hidden">
                <InstitutionsHero
                    video={giaVideo}
                    ih_Heading="Institute of Comp. Sci Applications"
                    ih_para="creating an enabling environment of active learning and become a centre of excellence."
                />
                <InstitutionsAbout 
                    Aheadig="About GIT"
                    Apara={aboutText}
                    Aimg={droneImg}
                />
            </div>

            <div className="content-container">
                <CommanHeading cheading="Programs" chheading="Offered Under Git" />
                <div className="container">
                    <div className="program-row">
                        <h5>B.C.A. (3 years)</h5>
                    </div>
                </div>
                <ProgramRow programs={giaBca3} />
                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>B.C.A. (Hons.) (4 years)</h5>
                        </div>
                    </div>
                    <ProgramRow programs={giaBca4} />
                </div>
                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>B.Sc. (3 years)</h5>
                        </div>
                    </div>
                    <ProgramRow programs={giaBsc} />
                    <div className="mt-10">
                        <div className="container">
                            <div className="program-row">
                                <h5>M.Sc. (5 years)</h5>
                            </div>
                        </div>
                        <ProgramRow programs={giaMsc} />
                    </div>
                </div>
            </div>
            <Heading sheading="OUR" shheading="FACILITIES" spara="The campus provides a refreshing environment with different facilities which makes our students feel at home." />
            <FacilityGrid />
            <Recruiters />
            <Specializations />
        </React.Fragment>
    );
};

export default Gia;
