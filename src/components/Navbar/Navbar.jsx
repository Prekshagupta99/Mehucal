import React, { useEffect, useState } from 'react';
import mehucal from "../../assets/mehucal.png";
import './Navbar.css';
const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',(()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }))
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={mehucal} alt="" className='logo '/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Applications</li>
            <li>Our Clients</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
