import React from 'react'
import "../components/sectcamaras/Products.css"
import AniBanner from '../components/animatebanner/AniBanner'
import Header from '../components/header/Header'
import SectProducts from "../components/sectcamaras/SectProducts"

const Tienda = () => {
  return (
    <>
        <Header />
        <div className="tiendabody">
        <AniBanner />
        <SectProducts />
        </div>
      
    </>
  )
}

export default Tienda