import React from 'react'
import about from '../../assets/abou1.jpg'
import '../About/About.css'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        {/* <h2>TAGLINE WE CAN ADD</h2> */}
        <p>
        We are approved vendor of Indian Railways for various Products including Pneumatic Air
brake fittings, MCI Fittings, Bio-toilet fittings, Retention Tank parts &amp; Accessories like S trap,
etc. Also, we specialize in developing user specific &amp; customised products with best of
quality.
The enterprise has established its own brands “LAL” and “MEHUCAL” which are very well
known &amp; most reliable in the industry.
        </p>
        <p>
        Formerly Known as “Kanchan Carbonates Pvt Ltd”, Mehucal India LLP is focused on providing
quality products and after sales service to its esteemed customers be it government
organisation or any private entity. Leading the industry with continuous innovation and
technology has always been our forte.
        </p>
        <p>
        Our strong partnerships with suppliers, distributors, and clients all over the country have
helped us establish a strong presence in the government sector as well as private market.
We are delivering our products in almost every state of the country and still penetrating the
market with our superior quality. We are constantly exploring new opportunities for growth
and expansion, and we are open to collaborations that align with our values and vision.
        </p>
      </div>
    </div>
  )
}

export default About
