import React from 'react'
import './InstitutionsHero.css'
import heroVideo from '../../assets/video/git-video.mp4'
import guIcon from '../../assets/images/gu-logo-icon.svg'

const InstitutionsHero = () => {
  return (
    <div className="institutions-hero-container relative add-index">
      <div className="institutions-hero-bg">
        <video src={heroVideo} autoplay="true" loop muted playsinline></video>
      </div>
      <div className="container add-index">
        <div className="row">
          <div className="col-lg-6">
            <div className="institutions-hero-content ms-lg-auto pe-xl-5">
              <h1>Institute of Technology</h1>
              <p>creating an enabling environment of active learning and become a centre of excellence.</p>
            </div>
            <div className="institutions-hero-form ms-lg-auto">
              <div className="row flex-column g-2">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <select className="form-select">
                      <option value="">Course</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        I'm not a robot
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input className="btn-form" value="Submit & Download" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ih-text-carousel">
        <div className="text-carousel-content text-carousel-parent textScroll">
          <div className="text-carousel-wrapper">
            <div className="text-carousel-list all-text-list">
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
            </div>

            <div className="text-carousel-list all-text-list">
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  ADMISSION OPEN
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
              <div className="text-carousel-item text-child">
                <div className="text-carousel-box">
                  Git
                  <div className="text-carousel-icon"><img src={guIcon} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstitutionsHero