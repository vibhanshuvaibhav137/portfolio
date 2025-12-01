import React from 'react'
import './Footer.css'
import {BsLinkedin, BsTwitterX} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vibhanshu Vaibhav</a>
      <ul className='permalinks'>
        <li className='permalinks-items'><a href="#">Home</a></li>
        <li className='permalinks-items'><a href="#about">About</a></li>
        <li className='permalinks-items'><a href="#dsa">DSA</a></li>
        <li className='permalinks-items'><a href="#experience">Experience</a></li>
        <li className='permalinks-items'><a href="#services">Services</a></li>
        <li className='permalinks-items'><a href="#web-portfolio">Portfolio</a></li>
        {/* <li className='permalinks-items'><a href="#testimonial">Testimonials</a></li> */}
        <li className='permalinks-items'><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://x.com/Vibhanshu_037"> <BsTwitterX/></a>
        <a href="https://wa.me/917857818458"><IoLogoWhatsapp/></a>
        <a href='https://www.linkedin.com/in/vibhanshu-vaibhav-25b3a3237/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/vibhanshuvaibhav137' target='_blank'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Vibhu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer