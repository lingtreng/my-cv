import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiTwotoneAccountBook} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillCustomerService} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserAdd/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiTwotoneAccountBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiFillCustomerService/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav