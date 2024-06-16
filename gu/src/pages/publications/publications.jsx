import React from 'react';
import './publications.css';
import inner9 from '../../assets/images/inner-img-9.jpg';
import Innerhero from '../../components/innerhero/innerhero';
import CardSlider from '../../components/CardSlider/CardSlider';
import publicationsData from '../../data/publications.json';
import PublicationsBook from '../../components/PublicationsBook/PublicationsBook';
import inner11 from '../../assets/images/inner-img-9.jpg';

const Publications = () => {
  return (
    <React.Fragment>
      <Innerhero backgroundImage={inner9} title="Publications" />
      <div className="position-relative" style={{ marginTop: "-31px" }}>
        <div className="background-image" style={{ backgroundImage: `url(${inner11})` }}></div>
        <CardSlider slides={publicationsData} additionalClassName="typetwo" />
        <PublicationsBook />
      </div>
    </React.Fragment>
  );
};

export default Publications;
