import React from 'react'
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./Products.css"
import { toast } from "react-toastify"
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const Products = ({ product, addToCart, loadCurrentItem }) => {

  const addCartNotification3 =()=>{
    toast.success("New product added to your cart",{
        type:"success",
        theme:"colored",
     })
    
}
 
  return (
    <div className='card'>
       <picture><img src={product.image} id="icard" alt={product.name} /></picture> 
     <div className="card-body">
            <h6 className="card-title"> {product.name} </h6>
            <p className='freesend'>Envio gratis</p>
            <h5 className='card-precio'>$ {product.precio.toFixed(3)}</h5>
     </div>
     <div className='botones'>
     <NavLink to={`/product/${product.id}`}>
          <button id='botonprod'
            onClick={() => loadCurrentItem(product)}> Watch More </button>
     </NavLink>
     <button className='secondboton' onClick={() =>{addToCart( product.id);  addCartNotification3()}}>Add To <FaCartPlus/></button>
     </div>
    
   
    </div>
  )
}

  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    
    };
  };
  export default connect(null, mapDispatchToProps)(Products);