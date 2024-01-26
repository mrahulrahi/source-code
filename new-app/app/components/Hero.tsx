import React, { ReactNode } from 'react'

interface Props {
    title: string | number;
    para: string;
    children?: ReactNode;
}

const Hero = ({title, para, children}: Props) => {
    return (
        <div className="container-xxl">
            <div className="row">
            <div className="col-12 hero-container vh-50 text-dark py-5">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{para}</p>
                        {children}
                    </div>
                </div>
            </div>
            </div>
        
        </div>
    )
}

export default Hero