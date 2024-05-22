import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import mehucal from "../../assets/mehucal.png";
import menu_icon from "../../assets/menu-icon.png";
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={mehucal} alt="" className='logo' />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='clients' smooth={true} offset={-400} duration={500}>Our Clients</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='product' smooth={true} offset={-260} duration={500}>Products</Link></li>
        <li><Link to='facility' smooth={true} offset={-150} duration={500}>Our Facility</Link></li>
        <li><Link to='contact' smooth={true} offset={-150} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
