import React, { Children, ReactNode } from 'react'

interface Props {
    title: string;
    para: string;
    children: ReactNode;
}

const Hero = ({title, para, children}: Props) => {
    return (
        <div>
            <div className="hero h-96 bg-base-200 hero-container w-100 vh-50 text-white py-5">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{para}</p>
                        {children}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero