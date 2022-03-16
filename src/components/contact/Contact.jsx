import React from 'react'
import './contact.css'


import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jqhwyyk', 'template_v0lfv58', form.current, 'Yw3_xW3ESja5YizNx')

        e.target.reset();
      };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact ME</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>nhutduyhuflit@gmail.com</h5>
                    <a href="mailto:nhutudyhuflit@gmail.com"  target='_blank'>Send a message</a>

                </article>
               
                <article className="contact__option">
                    
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Nguyen Nhut Duy</h5>
                    <a href="https://m.me/nhutduy2597" target='_blank'>Fb messager</a>

                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>nhutduyhuflit@gmail.com</h5>
                    <a href="https://api.whatsapp.com/send?phone+84931290387" target='_blank'>Call</a>
                </article>
            </div>
            {/*End of contact options */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your full name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact