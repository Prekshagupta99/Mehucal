import React from 'react'
import about from '../../assets/abou1.jpg'
import '../Facility/Facility.css'

const Facility = () => {
  return (
    <div className='facility'>
      <div className="facility-left">
        <h3>OUR FACILITIES</h3>
        {/* <h2>TAGLINE WE CAN ADD</h2> */}
        <p>
        
With a comprehensive array of in-house facilities encompassing everything from initial casting to meticulous finishing, our company is fully equipped to deliver excellence at every stage of production. Our extensive processes include casting, turning lathe work, hydraulic press punching, hydraulic bending, drilling, grinding, buffing, paint and coating application, chemical impregnation, and more. 
        </p>
        <p>From pneumatic testing to air-controlled calibration, endurance testing, and leakage testing, we ensure that our products meet stringent performance criteria. This commitment to quality assurance extends throughout every aspect of our operations, reflecting our dedication to customer satisfaction and product excellence.
        </p>
        <p>
        By maintaining a comprehensive suite of manufacturing and testing capabilities under one roof, we streamline production processes and maintain strict control over quality at every step.
        </p>
      </div>
      <div className="facility-right">
        <img src={about} alt="" className='facility-img'/>
      </div>
    </div>
  )
}

export default Facility
