import React from 'react';
import './home.css';
import Innerhero from '../../components/innerhero/innerhero';
import inner1 from '../../assets/images/inner-img-1.jpg';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import Specializations from '../../components/Specializations/specializations';
import Heading from '../../components/heading/heading'; 
import InfoCompany from '../../components/InfoCompany/InfoCompany';


const home = () => {
  return (
    <React.Fragment>

        <Innerhero backgroundImage={inner1} title="Institution’s Innovation Council" />
        <h1> Home </h1>

        <div className="content-container p-0 bg-white">
          <Specializations />
        </div>

        <div className="content-container p-0 bg-white">
            <Heading sheading="OUR" shheading="FACILITIES" spara=" The campus provides a refreshing environment with <br /> different facilities which makes our students feel at home." />
            <FacilityGrid />
        </div>
        <div className="content-container blue-linear">
            <InfoCompany />   
        </div>
        

    </React.Fragment>
  )
}

export default home