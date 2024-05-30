import React from 'react';
import location_icon from '../../assets/location-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import msg_icon from '../../assets/msg-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import '../Contact/Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37b282bf-27bd-492a-901d-4bca682fde91");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      formRef.current.reset(); // Reset form fields
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact' name='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} alt="mail-icon" /></h3>
        <p>Feel free to reach out to us through contact information below.</p>
        <ul>
          <li><img src={phone_icon} alt="phone-icon" />+91-9310005160<br/>011-44077886</li>
          <li><img src={mail_icon} alt="mail-icon" />mehucalindia@gmail.com</li>
          <li><img src={location_icon} alt="location-icon" />Regd Address: <br />A-1/22, Jeevan Jyoti Apartments, Pitampura, Delhi, 110034</li>
          <li><img src={location_icon} alt="location-icon" />Work: <br />246, Pocket-E, Sector - 4, DSIIDC Industrial Area, Bawana, Delhi - 110039</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="5" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
