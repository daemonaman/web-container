import React from 'react'
import './Contact.css'
const ContactUs = () => {
  return (
    <div className='contact-main'>
    <div className="contact">
      <h1>Contact Us</h1>
      <form >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
           
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
          
          />
        </div>
        <div>
          <label htmlFor="message">Description</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
          ></textarea>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button type="submit">Submit</button>
        </div>
        <h4 style={{color:"#0B0B0B",marginTop:"1.5rem",fontFamily:"Calibri",fontSize:"1.4rem"}}>Address :</h4>
        <h4 style={{fontSize:"16px",width:"100%",marginTop:"13px",textAlign:"justify",lineHeight:1.4,color:"#0B0B0B",fontWeight:"545",fontFamily:"Calibri"}}> ABASKEO SOLUTION PRIVATE LIMITED
        C/O SUGAN DEVI A 19, RAM NAGAR COLONY URBAN, Narnaul Kty., Narnaul, Mahendragarh- 123001, Haryana</h4>
      </form>
    </div>
    </div>
  )
}

export default ContactUs
