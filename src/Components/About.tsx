import React, { useState } from "react"
import arrow from "../assets/arrow.svg"

const About: React.FC = () => {
    const [underline, setUnderline] = useState<string | null>(null);
    return (
        <div className='p-3 m-auto md:min-h-screen' id='about'>
            <div className='text-4xl md:text-6xl mb-4'>ABOUT</div>
            <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
            <div className='gap-12'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20  '>
                    <div className='text-2xl md:text-4xl md:leading-13 md:w-2/3 italic text-white'>
                        Building scalable ML pipelines, deep learning models, and production-grade MLOps systems.
                    </div>
                    <div className='text-[#bdbdbd] font-md md:w-1/3'>
                        Hi, I'm Bhautik. A Data Scientist and Machine Learning Engineer specializing in designing predictive models, training neural networks, and deploying end-to-end ML solutions.
                        <br />
                        <br />
                        I graduated with a Bachelor of Engineering in Information and Communication Technology from Adani Institute of Infrastructure Engineering, GTU, achieving a CGPA of 8.46/10.
                        <br />
                        <br />
                        My focus lies at the intersection of data science, cloud deployment, and system architecture. I enjoy engineering optimized solutions, automating model testing/validation, and building interactive, data-driven systems.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:w-1/2 md:opacity-100 opacity-70 justify-between pt-6 md:pt-10 md:py-0 gap-4 md:gap-0 md:items-end md:pr-20">
                    <div>
                        <div className="text-white">
                            Data Science & Analytics
                        </div>
                        <div className="text-white">
                            MLOps & Cloud Deployment
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="text-xs text-[#686868]">Say Hello</div>
                        <div className='flex flex-col'>
                            <a href="mailto:bhautikvekariya1123@gmail.com" target="_blank" className="text-white" onMouseEnter={() => setUnderline('email')} onMouseLeave={() => setUnderline(null)}>bhautikvekariya1123@gmail.com</a>
                            <span
                                className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
                                style={{ width: underline == 'email' ? '100%' : '0%' }}
                            ></span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <a href='https://www.linkedin.com/in/bhautik-vekariya-253676272/' target="_blank" className="text-white" onMouseEnter={() => setUnderline('linkedin')} onMouseLeave={() => setUnderline(null)}>
                                Explore LinkedIn
                            </a>
                            <img src={arrow} alt="" className="h-6 filter invert" />
                        </div>
                        <span
                            className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
                            style={{ width: underline == 'linkedin' ? '100%' : '0%' }}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
