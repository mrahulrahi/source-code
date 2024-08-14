import React from 'react';
import './mou.css'
import Innerherotwo from '../../components/innerherotwo/innerherotwo';
import inner8 from '../../assets/images/inner-img-8.jpg';
import MouCard from '../../components/MouCard/MouCard';

const mou = () => {
  return (
    <React.Fragment>

     <Innerherotwo backgroundImage={inner8} title="MOU"/>
     <div className="content-container blue-bg">
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <MouCard />
                </div>
            </div>
         </div>
     </div>
    </React.Fragment>
  )
}

export default mou