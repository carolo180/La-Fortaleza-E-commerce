import React from 'react'
import ModalProduct from './ModalProduct'
import "./Products.css"

const Products = (props) => {
  return (
    <div className='card'>
       <picture><img src={props.imageplant} id="icard" alt={props.titulo} /></picture> 
     <div className="card-body">
            <h6 className="card-title"> {props.titulo} </h6>
            <p className='freesend'>Envio gratis</p>
            <h5 className='card-precio'>{props.precio}</h5>
       <button id="botonprod" data-bs-toggle="modal" data-bs-target={`#id${props.identi}`}>Watch More</button>
     </div>
   
     <ModalProduct idmodal={`id${props.identi}`} imagemodal={props.imageplant} titumodal={props.titulo} descripmodal={props.descrip} precio={props.precios} />
    </div>
  )
}

export default Products