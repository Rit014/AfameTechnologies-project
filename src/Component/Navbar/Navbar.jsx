import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import toggle_icon from '../Assets/toggle-icon.png';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  })

  const toggleIcon = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <>
      <div className={`nav ${sticky ? 'dark-nav' : ''} ${mobileMenu ? 'hide-menu' : ''}`}>
        <div className="nav-logo">
          <h1>EV-Olution</h1>
        </div>
        <ul className={` ${mobileMenu ? 'show-menu' : 'nav-menu'}`}>
          <li><Link to='home' smooth={true} offset={-100} >Home</Link></li>
          <li><Link to='explore' smooth={true}offset={-210}>Explore</Link></li>
          <li><Link to='about' smooth={true} offset={-260}>About</Link></li>
          <li><Link to='services' smooth={true} offset={-260}>Services</Link></li>
          <li className='nav-contact'><Link to='contact' smooth={true} offset={-200}>Contact us</Link></li>
        </ul>
        <div className="toggle">
          <img src={toggle_icon} className="toggle_icon" alt="" onClick={toggleIcon} />
        </div>
      </div>
    </>
  )
}

export default Navbar
