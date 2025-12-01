import React from 'react'
import './About.css'
import Me from '../../assets/dp.jpg'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAwardFilled className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>


            </article>
            <article className='about__card'>
              <BsBoxes className='about__icon' />
              <h5>DSA</h5>
              <small>200+</small>


            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>

          <p>Results-driven Full Stack Developer with specialized experience in engineering scalable B2B SaaS platforms and high-performance microservices using React.js, Node.js, and Docker. Proven ability to handle complex backend infrastructures, having architected financial transaction systems and admin panels for Filter Trade Technologies. Demonstrated innovation through impactful projects like 'DaanSetu' — a cloud-based donation ecosystem and a robust 'Typing Test App' with real-time analytics. Backed by a strong academic record (MCA, 8.72 CGPA) from Vellore Institute of Technology, I blend technical precision with a creative flair for digital storytelling to deliver secure, responsive, and reliable web solutions.</p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>
      </div>
    </section>

  )
}

export default About