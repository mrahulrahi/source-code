import React from 'react';
import './nisp.css';
import inner3 from '../../assets/images/inner-img-3.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const Nisp = () => { // Corrected component name to start with an uppercase letter
  return (
    <React.Fragment>
       <Innerhero backgroundImage={inner3} title="National innovation & start-up policy" />
      <h1>Nisp</h1> {/* Corrected content to uppercase */}
    </React.Fragment>
  );
};

export default Nisp; // Corrected export name to match the component name
