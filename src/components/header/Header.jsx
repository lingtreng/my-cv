import React from 'react'
import './header.css'
import Me from '../../assets/avt1.png'
import CTA  from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='#'>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h2>Nguyen Nhut Duy</h2>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header