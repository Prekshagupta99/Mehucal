import React from 'react'
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Facility from './components/Facility/Facility'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Title from './components/Title/Title'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <div className=''>
        <Title subTitle='Our Clients' title='add one small line'/>
      <Clients />
      </div>
      
      <Title subTitle='Our Products' title='Feel free to reach us'/>
      <Products/>
      <Facility/>
            <Title subTitle='Contact us' title='Feel free to reach us'/>

      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
