import React from 'react';
import './institutions.css';
import gitVideo from '../../assets/video/git-video.mp4';
import InstitutionsHero from '../../components/InstitutionsHero/InstitutionsHero';
import CommanHeading from '../../components/heading/commanheading';
import Heading from '../../components/heading/heading';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import Recruiters from '../../components/recruiters/recruiters';
import gitBachelors from '../../data/gitBachelors.json';
import gitMasters from '../../data/gitMasters.json';
import gitDiploma from '../../data/gitDiploma.json';
import gitPhd from '../../data/gitPhD.json';
import InstitutionsAbout from '../../components/InstitutionsAbout/InstitutionsAbout';
import Specializations from '../../components/Specializations/specializations';
import droneImg from '../../assets/images/flying-drone-img.png';

const Git = () => {
    const aboutText = `
        <p>Gandhinagar Institute of Technology (GIT), affiliated to Gandhinagar University is a nationally renowned Institute of higher education, offering world class education in undergraduate and post graduate program in whole range of Technology disciplines. The Institute has been rated as a 4 Star Institute under the GSIRF 2023 (Gujarat State Institutional Ranking Framework). GIT offers UG and PG courses which are approved by AICTE, New Delhi.</p>
        <p>It offers Bachelor level technical program (B.Tech.) in Computer Engineering, Information Technology, Mechanical Engineering, Electronics & Communication Engineering, Electrical Engineering and Civil Engineering. It also offers Master level technical program (M. Tech.) in Computer Engineering with specialization in Software Engineering and M. Tech. in Mechanical Engineering with specialization in Thermal Engineering and CAD / CAM.</p>
        <p>GIT nurtures its students all faceted growth of its students and serves a link between theory and practice using multidisciplinary education by following New Education Policy (NEP – 2020). Academic Regulations</p>
    `;


    return (
        <React.Fragment>
            <div className="overflow-hidden">
                <InstitutionsHero
                    video={gitVideo}
                    ih_Heading="Institute of Technology"
                    ih_para="Creating an enabling environment of active learning and becoming a centre of excellence."
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
                        <h5>Bachelors</h5>
                    </div>
                </div>
                <ProgramRow programs={gitBachelors} />

                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>Masters</h5>
                        </div>
                    </div>
                    <ProgramRow programs={gitMasters} />
                </div>

                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>Diploma</h5>
                        </div>
                    </div>
                    <ProgramRow programs={gitDiploma} />
                </div>

                <div className="mt-10">
                    <div className="container">
                        <div className="program-row">
                            <h5>PhD (Technology)</h5>
                        </div>
                    </div>
                    <ProgramRow programs={gitPhd} />
                </div>
            </div>

            <Heading
                sheading="OUR"
                shheading="FACILITIES"
                spara="The campus provides a refreshing environment with 
                    different facilities which make our students feel at home."
            />
            <FacilityGrid />
            <Specializations />
            <Recruiters />
        </React.Fragment>
    );
}

export default Git;
