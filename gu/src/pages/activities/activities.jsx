import React from 'react';
import './activities.css';
import activitiesBg from '../../assets/images/activities-hero-img-1.jpg';
import activitiesMan from '../../assets/images/activities-hero-img-2.png';
import CardSlider from '../../components/CardSlider/CardSlider';
import activitiesData from '../../data/activitiesData.json';
import ActivitiesCard from '../../components/ActivitiesCard/ActivitiesCard';
import Activities1 from '../../assets/images/activities-img-1.png';
import Activities3 from '../../assets/images/activities-img-2.png';
import Activities2 from '../../assets/images/bg-graphic-icon.svg';

import Ac1 from '../../assets/images/cc-img-1.png';
import Ac2 from '../../assets/images/cc-img-2.png';
import Ac3 from '../../assets/images/cc-img-3.png';
import Ac4 from '../../assets/images/cc-img-4.png';


const slides = [
  {
    image: Ac1,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac2,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac3,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac1,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac2,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac3,
    icon: Activities2,
    eventName: 'Event Name',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  }
];


const slides2 = [
  {
    image: Ac4,
    icon: Activities2,
    eventName: 'ROBOTICS',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac4,
    icon: Activities2,
    eventName: 'ROBOTICS',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac4,
    icon: Activities2,
    eventName: 'ROBOTICS',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac4,
    icon: Activities2,
    eventName: 'ROBOTICS',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  },
  {
    image: Ac4,
    icon: Activities2,
    eventName: 'ROBOTICS',
    type: 'TOURNAMENT',
    description: 'The campus provides a refreshing environment with different facilities which makes our students feel at home.',
  }
];

const Activities = () => {
  return (
    <React.Fragment>
      <div className="activities-hero" style={{ backgroundImage: `url(${activitiesBg})`, backgroundColor: '#000' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1> Activities </h1>
              <div className="activities-hero-img">
                <img src={activitiesMan} alt="Man participating in activities" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardSlider slides={activitiesData} />
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ac-text">
                <h4>‘A school with mind, <br /> heart, and a constant fizz!’</h4>
                <p>The campus provides a refreshing environment with different facilities which makes our students feel at home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActivitiesCard backgroundImage={Activities1} slides={slides} />
      <ActivitiesCard backgroundImage={Activities3} slides={slides2} height="760px"/>
    </React.Fragment>
  );
}

export default Activities;
