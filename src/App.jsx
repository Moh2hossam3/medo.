import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testmonaiols from './components/testmonaiols/testmonaiols'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Testmonaiols/> 
      <Contact />
      <Footer/>
    </>
  )
}

export default App
