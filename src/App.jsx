import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Favorite from './components/favorite/Favorite'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Favorite/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App