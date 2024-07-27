import React, { useEffect, useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src="https://theheritage.ac.in/images/TheHeritageLogo.png" className="logo" alt="Logo" />
      <ul className={mobileMenu?'':'hide-menu'}> 
        <li><Link to='home' smooth={true} offset={0}duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-340}duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-250}duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-340}duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-340}duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={0}duration={500}className="btn">Contact us</Link ></li>
      </ul>
      <img src='https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
