import React from "react";
import "./mc.css";

const MouCard = ({ mimg, mtitle, mname, mdescription, mlistheading, mlistitem }) => {
  return (
          <div className="mucard-item">
            <div className="mu-text">
              <h4>{mtitle}</h4>
              <h5>{mname}</h5>
              <p>{mdescription}</p>
              {mlistheading && <h6>{mlistheading}</h6>}
              {mlistitem && (
                <ul>
                  {mlistitem.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mu-img">
              <img src={mimg} alt={mtitle} />
            </div>
        </div>
  );
};

export default MouCard;
