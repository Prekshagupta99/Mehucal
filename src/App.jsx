import React from 'react'
import Clients from './components/Clients/Clients'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import About from './components/About/About'
import Facility from './components/Facility/Facility'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className=''>
        <Title subTitle='Our Clients' title='We have in house facility from beginning to finishing. Our major processes include casting,
turning Lathe Work, Hydraulic Press/punching machine, Hydraulic Bending machine, Drilling,
Grinding, buffing, Paint &amp; Coating, Chemical Imprigation, etc. Along with these, we have all

the major testing facilities in house to maintain the best in market quality &amp; standards. We
have in house pneumatic testing, air-controlled calibration, endurance testing facility,
leakage testing unit, etc.'/>
      <Clients />
      </div>
      <About/>
      <Products/>
      <Facility/>
            <Title subTitle='Contact us' title='Feel free to reach us'/>

      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
