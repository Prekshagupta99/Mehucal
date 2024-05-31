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

<Link to='hero' smooth={true} offset={0} duration={500}>
      <img src={mehucal} alt="" className='logo' />
      </Link>
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}><b>Home</b></Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}><b>About us</b></Link></li>
        <li><Link to='products' smooth={true} offset={-170} duration={500}><b>Products</b></Link></li>
        <li><Link to='facility' smooth={true} offset={-180} duration={500}><b>Facilities</b> </Link></li>
        <li><Link to='clients' smooth={true} offset={-230} duration={500}><b>Our Clients</b></Link></li>
        <li><Link to='contact' smooth={true} offset={-255} duration={500} className='btn'><b>Contact us</b></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
