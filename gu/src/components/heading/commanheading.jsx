import React from "react";

const CommanHeading = ({ cheading, chheading }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="heading text-center">
              <h4 className="uppercase">
                <span className="text-gold">{cheading}</span> {chheading}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommanHeading;
