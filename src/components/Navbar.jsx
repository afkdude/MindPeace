import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {

  const [isOpen, setIsopen] = useState(false); 
  const [activeSection, setActiveSection] = useState('home'); 
  const handleToggle = () => {
    setIsopen(!isOpen); 
  }

  const handleCloseMenu = () => {
    setIsopen(false); 
  }
  const navLinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2  md:space-y-0 p-4 md:p-0' >
      <li>
        <a href='#home'
          className={
            ` text-white 
            ${
            activeSection === 'home' ? 'isActive' : ''
            }`
          }
          
        >Home</a>
      </li>

      <li>
        <a href='#services'
          className={
            ` text-white 
            ${activeSection === 'services' ? 'isActive' : ''
            }`
          }

        >Services</a>
      </li>


      <li>
        <a href='#about'
          className={
            ` text-white 
            ${activeSection === 'about' ? 'isActive' : ''
            }`
          }

        >About US</a>
      </li>


      <li>
        <a href='#pricing '
          className={
            ` text-white 
            ${activeSection === 'pricing' ? 'isActive' : ''
            }`
          }

        >Pricing</a>
      </li>


      <li>
        <a href='#testimonial'
          className={
            ` text-white 
            ${activeSection === 'testimonial' ? 'isActive' : ''
            }`
          }

        >Testimonial</a>
      </li>

      
    </ul>
  )
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 '>
      
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* logo */}

        <div>
          <a href='/'>          
            <img src='/logo.svg' alt='logo'></img>
          </a>
        </div>

        {/* nav items */}

        <div className='hidden md:flex flex-grow justify-center'>

          <nav >
            {navLinks}
          </nav>

        </div>

        {/* button */}

        <div className='hidden md:block  text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded '>

          <a href='#contact'>Contact Us</a>
        </div>

        {/* hamburger menu  */}
        <div className='block md:hidden'>
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
            <HiOutlineMenuAlt3  className='size-6'/>
          </button>
        </div>


      </div>

      
      {/* mobile friendly  nav items */}

      {
        isOpen && (
          <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
            <ul className='flex flex-col p-4 space-y-3'
              onClick={(e) => {
                e.preventDefault();
                handleCloseMenu();
              }}>
              {navLinks.props.children}
              <li className='py-2 '>
                <a href='#contact'
                  className='text-white bg-primary  hover:bg-primary/90 px-4 py-2 rounded'
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu(); 
                  }}>Contact Us</a>
              </li>
            </ul>

            
          </nav>
        )
      }

      
    </header>
  )
}
