import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs' 

const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>M&M</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonaiols">Testmonaiols</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instgram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="foooter__copyright">
        <small>&copy; M&M SMALL BUS. ALl RIGHTS RESERVERD.</small>
      </div>
    </footer>
  )
}

export default footer
