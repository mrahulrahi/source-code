import React from 'react';
import './activities.css';
import activitiesBg from '../../assets/images/activities-hero-img-1.jpg';
import activitiesMan from '../../assets/images/activities-hero-img-2.png';
import CardSlider from '../../components/CardSlider/CardSlider';
import activitiesData from '../../data/activitiesData.json';
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
    </React.Fragment>
  );
}

export default Activities;
