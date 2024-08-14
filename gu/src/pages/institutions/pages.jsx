import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './institutions.css';
import Recruiters from '../../components/recruiters/recruiters';
import Specializations from '../../components/Specializations/specializations';
import FacilityGrid from '../../components/FacilityGrid/FacilityGrid';
import guIcon from '../../assets/images/gu-logo-icon.svg';
import InstitutionsHeroForm from '../../components/InstitutionsHeroForm/InstitutionsHeroForm';

const Pages = () => {
    const { slug } = useParams();
    const [eventDetails, setEventDetails] = useState(null);

    useEffect(() => {
        const getEvents = async (slug) => {
            try {
                const response = await axios.get(`https://ghandhinagaru.shopperbite.com/api/page/${slug}`);
                // console.log(response.data);  
                setEventDetails(response.data);
            } catch (error) {
                console.error("Error fetching event details:", error);
            }
        };

        getEvents(slug);
    }, [slug]);

    if (!eventDetails) {
        return <div>Loading...</div>;
    }

    const { modules } = eventDetails;

    return (
        <React.Fragment>
            <div className="overflow-hidden">
                
                {modules && modules.length > 0 && (
                    <div className="institutions-hero-container relative add-index" style={{ backgroundColor: modules[0].background_color }}>
                        <div className="institutions-hero-bg">
                            {modules[0].video && <video src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${modules[0].video}`} autoPlay loop muted playsInline></video>}
                        </div>
                        <div className="container add-index">
                            <div className="row">
                                <div className="col-lg-8 col-xl-6">
                                    <div className="institutions-hero-content ms-xl-auto pe-xl-5">
                                        <h1>{modules[0].title}</h1>
                                        <p>{modules[0].para}</p>
                                    </div>
                                    <InstitutionsHeroForm />
                                </div>
                            </div>
                        </div>
                        <div className="ih-text-carousel">
                            <div className="text-carousel-content text-carousel-parent textScroll">
                                <div className="text-carousel-wrapper">
                                    <div className="text-carousel-list all-text-list">
                                        {["ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag].map((text, index) => (
                                            <div key={index} className="text-carousel-item text-child">
                                                <div className="text-carousel-box">
                                                    {text}
                                                    <div className="text-carousel-icon">
                                                        <img src={guIcon} alt="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {["ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag].map((text, index) => (
                                            <div key={index} className="text-carousel-item text-child">
                                                <div className="text-carousel-box">
                                                    {text}
                                                    <div className="text-carousel-icon">
                                                        <img src={guIcon} alt="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {["ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag, "ADMISSION OPEN", modules[0].tag].map((text, index) => (
                                            <div key={index} className="text-carousel-item text-child">
                                                <div className="text-carousel-box">
                                                    {text}
                                                    <div className="text-carousel-icon">
                                                        <img src={guIcon} alt="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {modules && modules[1] && (
                    <div className="institutions-about-container relative overflow-hidden">
                        <div className="container add-index">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="d-flex flex-wrap">
                                <div className="institutions-about-content ms-lg-auto">
                                <h3>{modules[1].title}</h3>
                                <div>
                                    <p>{modules[1].para}</p>
                                </div>
                                </div>
                                <div className="institutions-about-img d-flex align-items-center justify-content-center">
                                {modules[1].image && (
                                    <img
                                    src={`https://ghandhinagaru.shopperbite.com/assets/uploads/${modules[1].image}`}
                                    alt={modules[1].title}
                                    />
                                )}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}

                {/* Other Components */}
                <div className="content-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="heading text-center">
                                    <h4 className="uppercase"><span className="text-gold">Programs</span> Offered Under {eventDetails.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="program-row">
                            <h5>B.C.A. (3 years)</h5>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="program-row">
                                    <div className="program-list flex flex-wrap">
                                        <div className="program-item">
                                            <div className="program-box w-full h-full">
                                                <div className="program-box-inner w-full h-full flex items-center">Bachelor of Computer Applications</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FacilityGrid />
                <Specializations />
                <Recruiters />
            </div>
        </React.Fragment>
    );
};

export default Pages;
