import React from 'react'

import ModalProduct from './ModalProduct'
import "./Products.css"
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Products = ({imageplant, titulo, addToCart, precios, id, descrip }) => {
 
  return (
    <div className='card'>
       <picture><img src={imageplant} id="icard" alt={titulo} /></picture> 
     <div className="card-body">
            <h6 className="card-title"> {titulo} </h6>
            <p className='freesend'>Envio gratis</p>
            <h5 className='card-precio'>{precios}</h5>
     </div>
     <div className='botones'>
     <button id="botonprod" data-bs-toggle="modal" data-bs-target={`#id${id}`}>Watch More</button>
     <button  className='secondboton' onClick={() => addToCart(id)}>Add To Cart</button>
     </div>
    
     <ModalProduct id={`id${id}`} imagemodal={imageplant} titumodal={titulo} descripmodal={descrip} precio={precios} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
   
  };
};
export default connect(null, mapDispatchToProps)(Products);