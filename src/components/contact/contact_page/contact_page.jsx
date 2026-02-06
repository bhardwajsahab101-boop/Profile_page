import React from 'react'
import "./contact_page.css"
import Navbar from "../../nav_bar/navbar";
import Footer from '../../footer/footer';

function ContactPage() {
  return (
    <>
    <Navbar/>
    <div className="contact_page">

        <h1 className="contact_heading">Get in Touch</h1>
        <div className='contact_page_sub_heading'>
        <p className="contact_paragraph">Have a project in mind, a question, or want to collaborate?</p>
        <p className="contact_paragraph">I’m always open to discussing new opportunities and ideas.</p>
        
        </div>
      <div className='contact_page_main_conatiner'>
        <div className='contact_details_section'>
        <p className="contact_details_heading_text">Email : PardeepBhardwaj.pb@gmail.com</p>
        <a className="contact_link_button" href='mailto:PardeepBhardwaj.pb@gmail.com'>
          Send Email
        </a>
        <p className="contact_details_heading_text">Phone: +1 (123) 456-7890</p>
        <a className="contact_link_button" href='tel:+11234567890'>
          Call Me
        </a>
        <p className="contact_details_heading_text">LinkedIn: linkedin.com/in/uncleprofile</p>
        <a className="contact_link_button" href='https://www.linkedin.com/in/uncleprofile' target="_blank" rel="noopener noreferrer">
          LinkedIn 
        </a>
        </div>
        <div className='contact_form_section'>
          <h2 className='contact_form_heading'>Contact Form</h2>
          <form className='contact_form'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows='5' required></textarea>
            <button className="contact_link_button" type='submit'>Send Message</button>
          </form>
        </div>
      </div>

    </div>
<Footer/>
    </>
  )
}

export default ContactPage
