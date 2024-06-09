import React from 'react';
import PropTypes from 'prop-types';
import './InstitutionsAbout.css';

const InstitutionsAbout = ({ Aheadig, Apara, Aimg, AimgWidth, AimgHeight}) => {
    return (
        <div className="institutions-about-container relative overflow-hidden">
            <div className="container add-index">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap">
                            <div className="institutions-about-content ms-lg-auto">
                                <h3>{Aheadig}</h3>
                                <div dangerouslySetInnerHTML={{ __html: Apara }} />
                            </div>
                            <div className="institutions-about-img d-flex align-items-center justify-content-center">
                                <img src={Aimg} alt="About" style={{ width: AimgWidth, height: AimgHeight }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

InstitutionsAbout.propTypes = {
    Aheadig: PropTypes.string.isRequired,
    Apara: PropTypes.string.isRequired,
    Aimg: PropTypes.string.isRequired
};

export default InstitutionsAbout;
