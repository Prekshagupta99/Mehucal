import React from 'react'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} alt="mail-icon" /></h3>
        <p>Feel free to reach out to us through contact information below.</p>
        <ul>
            <li><img src={mail_icon} alt="mail-icon"/>mehucalindia@gmail.com</li>
            <li><img src={phone_icon} alt="mail-icon"/>011-44077886, 9310005160</li>
            <li><img src={location_icon} alt="mail-icon"/>A-1/22, Jeevan Jyoti Apartments, Pitampura, Delhi, 110034</li>
            <li><img src={location_icon} alt="mail-icon"/>246, Pocket-E, Sector - 4, DSIIDC Industrial Area, Bawana, Delhi - 110039</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
