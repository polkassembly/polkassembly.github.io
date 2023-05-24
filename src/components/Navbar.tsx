import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import polkassemblyLogo from '../assets/images/pa-logo.svg'

export default function Navbar() {
  const launchAppBtnClasses = 'hidden md:inline-flex relative items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium transition duration-300 ease-out border-2 border-pa-pink rounded-full shadow-md group';
  const launchAppBtnMobileClasses = 'block md:hidden text-sm font-normal whitespace-nowrap rounded-md border border-pa-pink hover:text-white hover:bg-pa-pink px-2 py-1';

  function currentRoute() {
    const location = useLocation();
    const currentPath = location.pathname;
    return currentPath;
  }

  useEffect(() => {
    let hash = window.location.hash;
    const el = document.getElementById(hash.substring(1));
    const screenPosition = el?.getBoundingClientRect().top;
    if(hash && el && screenPosition) {
      scroll.scrollTo(Number(screenPosition));
    }
  })

	return (
		<nav className={`${currentRoute() == '/launch-app' ? "bg-white" : ""} bg-transparent z-50`}>
      <div className="container flex justify-space-between text-black text-center py-3">
        <Link to='/' className="logo ml-3 md:ml-6">
          <img src={polkassemblyLogo} className="h-auto w-32 md:w-44" />
        </Link>
        <div className="ml-auto mr-3 md:mr-6 flex items-center">
          { currentRoute() == '/' ? 
            <>
              <ScrollLink to="about-section" smooth='easeInOutQuart' delay={0} offset={-40} duration={200} className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>About</ScrollLink>
              <ScrollLink to="top-features-section" smooth='easeInOutQuart' delay={0} offset={-40} duration={200} className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>Top Features</ScrollLink>
              <ScrollLink to="roadmap-section" smooth='easeInOutQuart' delay={0} offset={-40} duration={200} className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>Roadmap</ScrollLink>
            </> 
            :
            <>
              <Link to="/#about-section" className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>About</Link>
              <Link to="/#top-features-section" className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>Top Features</Link>
              <Link to="/#roadmap-section" className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>Roadmap</Link>
            </>
          }

          <a href="https://docs.polkassembly.io/" rel="noopener noreferrer" target="_blank" className='mx-0 mr-3 md:mx-6 font-normal text-sm md:text-base md:font-semibold hover:text-pa-pink'>Docs</a>

          <NavLink to='/launch-app' className={({ isActive }) => isActive ? `bg-pa-pink text-white ${launchAppBtnClasses}` : `text-pa-pink ${launchAppBtnClasses}`}>
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pa-pink group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Launch App</span>
            <span className="relative invisible">Launch App</span>
          </NavLink>

          <NavLink to='/launch-app' className={({ isActive }) => isActive ? `bg-pa-pink text-white ${launchAppBtnMobileClasses}` : `text-pa-pink ${launchAppBtnMobileClasses}`}>
            Launch App
          </NavLink>
        </div>
      </div>
    </nav>
	)
}
