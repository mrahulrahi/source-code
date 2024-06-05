import React from 'react';
import './home.css';
import Innerhero from '../../components/innerhero/innerhero';
import inner1 from '../../assets/images/inner-img-1.jpg';

const home = () => {
  return (
    <React.Fragment>

        <Innerhero backgroundImage={inner1} title="Institution’s Innovation Council" />
        <h1> Home </h1>

    </React.Fragment>
  )
}

export default home