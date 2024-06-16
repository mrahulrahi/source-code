import React from 'react';
import './achievements.css';
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import inner7 from '../../assets/images/inner-img-7.jpg'
import CardSlider from '../../components/CardSlider/CardSlider';
import mou from '../../data/mou.json';
import AchievementsSlider from '../../components/achievements/AchievementsSlider';

const achievements = () => {
  return (
    <React.Fragment>

       <Innerherotwo backgroundImage={inner7} title="ACHIEVEMENTS"/>
       <CardSlider slides={mou} additionalClassNametwo="gold"/>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
       <div className="ac-slider overflow-hidden gold-bg">
         <div className="as-heading">  <h5>   CE Department Achievements  </h5>  </div>
          <AchievementsSlider /> 
       </div>
    </React.Fragment>
  )
}

export default achievements