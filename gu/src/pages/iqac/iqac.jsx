import React from 'react';
import './iqac.css';
import inner4 from '../../assets/images/inner-img-4.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const IQAC = () => { 
  return (
    <React.Fragment>
      <Innerhero backgroundImage={inner4} title="The Internal Quality Assurance Cell" />
      <h1>IQAC</h1> 
    </React.Fragment>
  );
};

export default IQAC; 
