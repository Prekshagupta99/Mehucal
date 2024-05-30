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
        <h2>Pursuit of Excellence</h2>
        <p>
        Established in 1987, Mehucal India LLP is a multi-disciplinary manufacturer specializing in bathroom fittings, Bio Toilet fittings, and Pneumatic pipe fittings. We produce finished goods from die casting, sand casting, and investment casting in stainless steel, brass, and malleable cast iron, serving industries like railways, automobiles, construction, and machinery.</p>
<p>
As an approved vendor for Indian Railways, we supply products such as Pneumatic Air brake fittings, MCI Fittings, Bio-toilet fittings, and Retention Tank parts. We also develop customized products of the highest quality. Our brands, “LAL” and “MEHUCAL,” are well-known and trusted in the industry.
Formerly known as “Kanchan Carbonates Pvt Ltd,” we are committed to quality products and after-sales service for both government and private entities.

        </p>
        <p>
        We have an expert team of professionals for various processes of manufacturing and quality
control. We are holding on to the vision of our founder Mr. Maman Chand Gupta of providing quality
&amp; reliable products along with impeccable after sales services to all our clients. The baton is
now in reliable &amp; experienced hands of Mr. Sanjay Gupta &amp; Mr. Sanchit Gupta to scale the
legacy of our establishment to new heights.
        </p>
      </div>
    </div>
  )
}

export default About
