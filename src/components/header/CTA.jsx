import React from 'react'
import resume from '../../assets/Resume.pdf'
import { FaRegMessage } from "react-icons/fa6";

// import '../../index'
const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn2' href={resume} download > Resume</a>
      <a href="#contact" className='btn3'><FaRegMessage/></a>
      
    </div>
  )
}

export default CTA