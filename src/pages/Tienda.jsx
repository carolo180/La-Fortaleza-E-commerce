import React from 'react'
import "../components/sectcamaras/Products.css"
import AniBanner from '../components/animatebanner/AniBanner'
import SectProducts from "../components/sectcamaras/SectProducts"

const Tienda = () => {
  return (
    <>
       
        <div className="tiendabody">
        <AniBanner />
        <SectProducts />
        </div>
      
    </>
  )
}

export default Tienda