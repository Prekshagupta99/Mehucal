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
        We have in house facility from beginning to finishing. Our major processes include casting,
turning Lathe Work, Hydraulic Press/punching machine, Hydraulic Bending machine, Drilling,
Grinding, buffing, Paint &amp; Coating, Chemical Imprigation, etc. Along with these, we have all

the major testing facilities in house to maintain the best in market quality &amp; standards. We
have in house pneumatic testing, air-controlled calibration, endurance testing facility,
leakage testing unit, etc.
        </p>
        <p>
          
        </p>
      </div>
      <div className="facility-right">
        <img src={about} alt="" className='facility-img'/>
      </div>
    </div>
  )
}

export default Facility
