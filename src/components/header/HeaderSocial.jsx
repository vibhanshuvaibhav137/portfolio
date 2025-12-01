import React from 'react'
import {BsLinkedin, BsTwitterX} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/vibhanshu-vaibhav-25b3a3237' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/vibhanshuvaibhav137' target='_blank'><FaGithub/></a>
      <a href='https://x.com/Vibhanshu_037' target='_blank'><BsTwitterX /></a>

    </div>
  )
}

export default HeaderSocial