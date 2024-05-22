import React from 'react'
import about from '../../assets/abou1.jpg'
import '../Facility/Facility.css'

const Facility = () => {
  return (
    <div className='facility'>
      <div className="facility-left">
        <h3>OUR FACILITIES</h3>
        <h2>TAGLINE WE CAN ADD</h2>
        <p>
          We have an expert team of professionals for various processes of manufacturing and quality
          control. Along with this our front desk staff is professionally experienced in fulfilling all the
          customer requirements. The team is fully capable in providing customised solutions to our
          clients as per their needs &amp; requirements.
        </p>
        <p>
          Our strong partnerships with suppliers, distributors, and clients all over the country have
          helped us establish a strong presence in the government sector as well as private market.
          We are delivering our products in almost every state of the country and still penetrating the
          market with our superior quality. We are constantly exploring new opportunities for growth
          and expansion, and we are open to collaborations that align with our values and vision.
        </p>
      </div>
      <div className="facility-right">
        <img src={about} alt="" className='facility-img'/>
      </div>
    </div>
  )
}

export default Facility
