import React from 'react';
import '../src/index.css';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Facility from './components/Facility/Facility';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Title from './components/Title/Title';
import Cards from './components/Cards/Cards';
import cardsData from '../src/data/cards';

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <About />
      <Title subTitle='Our Products' title='Feel free to reach us' />
      <span><br/><br/></span>
      <Products />
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          image={card.image}
          title={card.title}
        />
      ))}
      <Facility />
      <div className=''>
        <Title subTitle='Our Clients' title='add one small line' />
        <Clients />
      </div>
      <Title subTitle='Contact us' title='Feel free to reach us' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
