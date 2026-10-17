import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import mehucal from "../../assets/mehucal.png";
import menu_icon from "../../assets/menu-icon.png";
import './Navbar.css';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const updateStickyState = () => {
      setSticky(window.scrollY > 50);
    };

    updateStickyState();
    window.addEventListener('scroll', updateStickyState, { passive: true });
    return () => window.removeEventListener('scroll', updateStickyState);
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`site-nav ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>
        <img src={mehucal} alt="Mehucal home" className='logo' />
      </Link>
      <ul id="site-navigation" className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}><b>Home</b></Link></li>
        <li><Link to='about' smooth={true} offset={-100} duration={500} onClick={closeMenu}><b>About us</b></Link></li>
        <li><Link to='products' smooth={true} offset={0} duration={500} onClick={closeMenu}><b>Products</b></Link></li>
        <li><Link to='facility' smooth={true} offset={-100} duration={500} onClick={closeMenu}><b>Facilities</b></Link></li>
        <li><Link to='clients' smooth={true} offset={0} duration={500} onClick={closeMenu}><b>Our Clients</b></Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn' onClick={closeMenu}><b>Contact us</b></Link></li>
      </ul>
      <button
        type="button"
        className="menu-toggle"
        aria-label={mobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenu}
        aria-controls="site-navigation"
        onClick={() => setMobileMenu((isOpen) => !isOpen)}
      >
        <img src={menu_icon} alt="" className='menu-icon' />
      </button>
    </nav>
  );
}

export default Navbar;
