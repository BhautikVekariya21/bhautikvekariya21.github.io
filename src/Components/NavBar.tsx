import React, { useState } from 'react'
import { Link } from 'react-scroll'
import arrow from "../assets/arrow.svg"

const NavBar: React.FC = () => {
  const [underline, setUnderline] = useState<string | null>(null);

  return (
    <nav className="mx-auto navbar-light py-10 flex w-[90%] justify-center">
      <div className="flex text-left justify-between pr-50 w-[70%] text-sm">
        <div className=''>
          <div>Based In</div>
          <div>Ahmedabad, India</div>
        </div>
        <div className=''>
          <div>Say Hello</div>
          <div className='hover:text-white transition-colors flex'>
            <a href="mailto:bhautikvekariya1123@gmail.com" target="_blank">bhautikvekariya1123@gmail.com</a>
            <img src={arrow} alt="" className="h-6 filter invert ml-1" />
          </div>
        </div>
        <div className=''>
          <div>Resume</div>
          <div className='hover:text-white transition-colors flex'>
            <a href="/Bhautik Vekariya.pdf" target='_blank'>View Here</a>
            <img src={arrow} alt="" className="h-6 filter invert ml-1" />
          </div>
        </div>
      </div>
      <div className="flex w-[30%] justify-between text-sm">
        <div className='flex flex-col'>
          <Link to="about" smooth={true} duration={300} className='cursor-pointer' onMouseEnter={() => setUnderline('about')} onMouseLeave={() => setUnderline(null)} >
            ABOUT
          </Link>
          <span
            className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
            style={{ width: underline == 'about' ? '100%' : '0%' }}
          ></span>
        </div>

        <div className='flex flex-col'>
          <Link to="projects" smooth={true} duration={300} className='cursor-pointer' onMouseEnter={() => setUnderline('projects')} onMouseLeave={() => setUnderline(null)}>
            PROJECTS
          </Link>
          <span
            className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
            style={{ width: underline == 'projects' ? '100%' : '0%' }}
          ></span>
        </div>

        <div className='flex flex-col'>
          <Link to="experience" smooth={true} duration={300} className='cursor-pointer' onMouseEnter={() => setUnderline('experience')} onMouseLeave={() => setUnderline(null)}>
            EXPERIENCE
          </Link>
          <span
            className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
            style={{ width: underline == 'experience' ? '100%' : '0%' }}
          ></span>
        </div>

        <div className='flex flex-col'>
          <Link to="contact" smooth={true} duration={300} className='cursor-pointer' onMouseEnter={() => setUnderline('contact')} onMouseLeave={() => setUnderline(null)}>
            CONTACT
          </Link>
          <span
            className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out"
            style={{ width: underline == 'contact' ? '100%' : '0%' }}
          ></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
