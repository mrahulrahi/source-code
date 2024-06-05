import React from 'react'

const Heading = ( {sheading, shheading, spara} ) => {
  return (
    <React.Fragment>

        <div className="heading text-center px-md-5">
            <h2><span className="text-gold">{sheading}</span> {shheading} </h2>
            <p dangerouslySetInnerHTML={{ __html: spara }}></p>
        </div>

    </React.Fragment>
  )
}

export default Heading
