import React from 'react'
import Header from "../components/header/Header";
import Carousel from '../components/carrusel/Carousel';
import InfoEnvio from '../components/infoEnvio/InfoEnvio';
import AboutUs from '../components/about_us/AboutUs';
import BestSeller from '../components/bestseller/BestSeller';
import Ubication from '../components/ubication/Ubication';
import '../index.css';

const Home = () => {
  return (
    <>
        <Header />
        <div className='body'>
          <Carousel />
          <InfoEnvio />
          <AboutUs />
          <BestSeller />
          <Ubication />
        </div>
    
    </>
  )
}

export default Home