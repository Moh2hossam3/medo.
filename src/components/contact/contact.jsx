import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>m.mansi2hossam@gmail.com</h6>
            <h6>mohamedworktech@gmail.com</h6>
            <a href="mailto:m.mansi2hossam@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mohamed Hossam</h5>
            <a href="https://m.me/Mohamed.Hossam" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+20 1144675139</h5>
            <h5>+20 1097306092</h5>
            <a href="https://api.whatsapp.com/send?phone=201144675139" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
