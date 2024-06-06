import React from 'react';
import './institutions.css';
import InstitutionsHero from '../../components/InstitutionsHero/InstitutionsHero'
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

const Git = () => {
    return (
        <React.Fragment>
            <div className="overflow-hidden">
                <InstitutionsHero />
                <InstitutionsAbout />
            </div>

            <div className="content-container">
                <CommanHeading cheading="Programs" chheading="Offered Under Git" />
                <div className="container">  <div className="program-row"> <h5>Bachelors</h5> </div> </div>
                <ProgramRow programs={gitBachelors} />
                <div className="mt-10">
                    <div className="container">  <div className="program-row"> <h5>Masters</h5> </div> </div>
                    <ProgramRow programs={gitMasters} />
                </div>
                <div className="container">
                    <div className="mt-10">
                        <div className="container">
                            <div className="program-row">
                                <h5>DIPLOMA</h5>
                            </div>
                        </div>
                        <ProgramRow programs={gitDiploma} />
                        <div className="mt-10">
                            <div className="container">
                                <div className="program-row">
                                    <h5>PhD (Technology)</h5>
                                </div>
                            </div>
                            <ProgramRow programs={gitPhd} />
                        </div>
                    </div>
                </div>
            </div>
            <Heading sheading="OUR" shheading="FACILITIES" spara=" The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home." />
            <FacilityGrid />
            <Recruiters />
        </React.Fragment>
    );
}

export default Git;
