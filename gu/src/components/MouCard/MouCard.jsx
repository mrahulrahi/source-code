import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mc.css";

const MouCard = () => {
  const [mouData, setMouData] = useState(null);

  useEffect(() => {
    axios.get('https://ghandhinagaru.shopperbite.com/api/getAllMous')
      .then(response => {
        // Assuming the API returns an array of MOU objects
        setMouData(response.data[0]); // Set the first MOU object for demonstration
      })
      .catch(error => {
        console.error('Error fetching MOU data:', error);
      });
  }, []);

  if (!mouData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mucard-item">
      <div className="mu-text">
        <h4>{mouData.heading1}</h4>
        <h5>{mouData.heading2}</h5>
        <p>{mouData.content}</p>
      </div>
      <div className="mu-img">
        <img src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${mouData.image}`} alt={mouData.title} />
      </div>
    </div>
  );
};

export default MouCard;
