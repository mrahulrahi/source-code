import React, { ReactNode } from 'react'

interface Props {
    subTitle?: string | number;
    title: string | number;
    para?: string;
    children?: ReactNode;
}

const Hero = ({ subTitle, title, para, children }: Props) => {
    return (
        <div className=" hero-container content-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content text-center text-dark">
                            <div className="max-w-md">
                                <h2>{subTitle}</h2>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{para}</p>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero