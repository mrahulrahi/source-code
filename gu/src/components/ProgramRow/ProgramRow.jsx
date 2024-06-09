import React from 'react'
import './ProgramRow.css'

const ProgramRow = ({ programs }) => {
    return (
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                        <div className="program-row">
                            <div className="program-list flex flex-wrap">
                                {programs.map((program) => (
                                    <div key={program.id} className="program-item">
                                        <div className="program-box w-full h-full">
                                            <div className="program-box-inner w-full h-full flex items-center">
                                            {program.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                   </div>
               </div>
           </div>
    )
}

export default ProgramRow