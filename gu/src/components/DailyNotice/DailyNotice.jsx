import React from 'react';
import './dn.css';
import DailyNoticeData from '../../data/DailyNotice.json'

const DailyNotice = ( ) => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="all-notice-list d-flex flex-wrap mt-4">
                {DailyNoticeData.map(notice => (
                  <div className="all-notice-item" key={notice.id}>
                    <div className="all-notice-box d-flex">
                      <div className="all-notice-date">{notice.jdate}</div>
                      <a href='#!' className="all-notice-content">{notice.jTitle}</a>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyNotice;
