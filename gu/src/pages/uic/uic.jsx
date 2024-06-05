import React from 'react';
import './uic.css';
import inner2 from '../../assets/images/inner-img-2.jpg';
import Innerhero from '../../components/innerhero/innerhero';

const uic = () => {
  return (
    <React.Fragment>

     <Innerhero backgroundImage={inner2} title="University Innovation Cell" />
     <h1> UIC  </h1>

    </React.Fragment>
  )
}

export default uic
