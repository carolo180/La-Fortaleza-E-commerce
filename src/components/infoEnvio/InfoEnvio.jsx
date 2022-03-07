import React from 'react'
import "./InfoEnvio.css"
import { FaTruck } from "react-icons/fa";

const InfoEnvio = () => {
  return (
    <div className='envio'>
        <h4 className='enviotitle'>Free Shipping</h4>
        <p className='envioparrafo'>For purchases over 100,000 <FaTruck className='iconenvio'/></p>
    </div>
  )
}

export default InfoEnvio