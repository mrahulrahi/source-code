import React from 'react'
import './ApprovalCard.css'

const ApprovalCard = ({approval}) => {
    return (
        <div className="approval-box bg-graphic h-100">
            <div className="flex flex-col justify-center text-center add-index h-100">
                <h6>{approval.title}</h6>
            </div>
        </div>
    )
}

export default ApprovalCard