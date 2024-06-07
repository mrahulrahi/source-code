import React from 'react';
import './approvals.css';
import inner5 from '../../assets/images/inner-img-5.jpg';
import Innerhero from '../../components/innerhero/innerhero';
import approvalList from '../../data/approval.json'
import ApprovalCard from '../../components/ApprovalCard/ApprovalCard';

const approvals = () => {
  return (
    <React.Fragment>

      <Innerhero backgroundImage={inner5} title="APPROVALS" />

      <div className="content-container">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="approval-head text-center">
                <h4>The Internal Quality Assurance Cell</h4>
                <p>The Internal Quality Assurance Cell (IQAC) was established in 2019 at Gandhinagar University (GU) with the focus to make the quality the defining element at GU. The IQAC ensures the effective implementation of quality initiatives through a combination of self and external quality evaluation, promotion, and sustenance initiatives. The IQAC strives for excellence in all of the university’s academic and administrative activities. For the functions of IQAC cell refer the IQAC policy.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="approval-list flex flex-wrap">
                {approvalList.map((approval) => (
                  <div key={approval.id} className="approval-item">
                    <ApprovalCard approval={approval} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default approvals