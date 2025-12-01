import React from 'react'
import './Contact.css'

import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {BsLinkedin, BsTwitterX} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mail sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vibhanshu.vaibhav.37@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&to=vibhanshu.vaibhav.37@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Send a mail</b>
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Connect on LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/vibhanshu-vaibhav-25b3a3237"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>View Profile</b>
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7857818458</h5>
            <a href="https://wa.me/917857818458"
              target="_blank"
              rel="noopener noreferrer"><b>Send a message</b></a>
            {/* "https://wa.me/917857818458" */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
//egator