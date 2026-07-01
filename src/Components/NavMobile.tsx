import React, { useState } from 'react';
import options from "../assets/options.svg"
import { Link } from "react-scroll"

const NavbarMobile: React.FC = () => {
    const [nav, setNav] = useState(false);

    return (
        <nav className="relative top-0 left-0 right-0 z-50 backdrop-blur-lg border-neutral-700/20 flex items-center justify-between w-[85%] m-auto py-6">
            <div className="flex-shrink-0 text-xs gap-3 flex flex-col text-[#bdbdbd]">
                <div className=''>
                    Based In <br></br>
                    Ahmedabad, India
                </div>
                <div className='flex-shrink-0'>
                    <div className="text-[#686868]">Say Hello</div>
                    <a href="mailto:bhautikvekariya1123@gmail.com" className="text-white hover:underline">bhautikvekariya1123@gmail.com</a>
                </div>
                <div className='flex-shrink-0'>
                    <div className="text-[#686868]">Resume</div>
                    <a href="/Bhautik Vekariya.pdf" target="_blank" className="text-white hover:underline">View Here</a>
                </div>
            </div>

            <div className='flex-shrink-0'>
                <img
                    src={options}
                    alt="options"
                    className="h-6 w-auto filter invert cursor-pointer"
                    onClick={() => setNav(!nav)}
                />
            </div>
            <div
                className='fixed top-28 left-[10%] w-[80%] flex flex-col bg-[#0D0D0D]/90 backdrop-blur-lg z-50 border border-neutral-800 rounded-lg shadow-xl'
                style={{ display: nav ? "" : 'none' }}
                onClick={() => setNav(false)}
            >
                <Link to="about" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2 text-white hover:bg-neutral-800 rounded-md'>
                    ABOUT
                </Link>
                <Link to="projects" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2 text-white hover:bg-neutral-800 rounded-md'>
                    PROJECTS
                </Link>
                <Link to="experience" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2 text-white hover:bg-neutral-800 rounded-md'>
                    EXPERIENCE
                </Link>
                <Link to="contact" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2 text-white hover:bg-neutral-800 rounded-md'>
                    CONTACT
                </Link>
            </div>
        </nav>
    );
};

export default NavbarMobile;
