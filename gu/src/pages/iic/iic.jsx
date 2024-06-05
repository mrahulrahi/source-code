import React from 'react';
import './iic.css';
import Innerhero from '../../components/innerhero/innerhero';
import inner1 from '../../assets/images/inner-img-1.jpg';
import CommanHeading from '../../components/heading/commanheading';
import Heading from '../../components/heading/heading';
import FaciliyGrid from '../../components/FacilityGrid/FacilityGrid';

const iic = () => {
  return (
    <React.Fragment>
     
        <Innerhero backgroundImage={inner1} title="Institution’s Innovation Council" />
           <h1> IIc </h1>
        <CommanHeading />
        <Heading />
        <FaciliyGrid />
        
        

    </React.Fragment>
  )
}

export default iic