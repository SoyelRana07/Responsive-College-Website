import React from 'react'
import './Contact.css';
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7b1b4832-930c-4d46-9ea2-d453fd027df6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src='https://webstockreview.net/images/message-icon-png-1.png' /></h3>
            <p>To prepare dynamic and caring citizens to meet the challenges of global society while retaining their traditional values.</p>
            <ul>
                <li><img src='https://pngimg.com/uploads/phone/phone_PNG48919.png' />Ph: +91 33 6627 0600 / 0609 / 0614 / 0622</li>
                <li><img src='https://th.bing.com/th/id/R.3ea5d09ed6d30dbf6f1f4871e5e4c788?rik=0iGQR9DRLKii1w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2femail-icon-png-email-icon-2048.png&ehk=ahnNwHNab9Dq7qF3w%2fPChLDTTN3R5mvMWkD739gMXIg%3d&risl=&pid=ImgRaw&r=0'/>E-mail: admin@heritageit.edu</li>
                <li><img src='https://www.freeiconspng.com/thumbs/location-icon-png/location-symbol-png-circle-location-icon-13.png'/>Chowbaga Road, Anandapur</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your enquiry</label>
                <textarea name="messsage" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>

            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
