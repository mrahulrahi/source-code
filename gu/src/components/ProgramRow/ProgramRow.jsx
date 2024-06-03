import React from 'react'
import './ProgramRow.css'

const ProgramRow = () => {
    return (
        <div className="program-row">
            <h5>Bachelors</h5>
            <div className="program-list d-flex flex-wrap">
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Artificial Intelligence
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Electronics &
                            Communications
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Computers
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Civil
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Cyber
                            Security
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Information
                            Technology
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Mechanicals
                        </div>
                    </div>
                </div>
                <div className="program-item">
                    <div className="program-box w-100 h-100">
                        <div className="program-box-inner w-100 h-100 d-flex align-items-center">
                            Electricals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramRow