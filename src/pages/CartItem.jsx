import React, { useState, useEffect } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";
import { IoTrashBinSharp } from "react-icons/io5";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
 
 const [input, setInput] = useState(itemData.qty)
 const [Price, setPrice] = useState(itemData.precio);
 
 //guarda y envia el nuevo estado o valor del contador
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  useEffect(() => {
    let qtyunit = 0;
    let prices = 0;
//los datos del carrito se los pasa carrito.jsx atravez de la propiedad itemData
  
//parseo de la propiedad precio para poder realizar la operacion aritmetica
itemData.precio=parseFloat(itemData.precio);
      qtyunit += itemData.qty;
      prices += itemData.qty * itemData.precio;
  
    
//seteo de los valores de unidades de productos y precio total que se mostrara
    setInput(qtyunit);
    setPrice(prices);
  }, [ input, Price, setPrice, setInput]);

 

  return (
    <div className="allcart">
      
      <img src={itemData.image} alt={itemData.name} />
      <div className="infocart">
          <button className="trash" onClick={() => removeFromCart(itemData.id)}>
                          <IoTrashBinSharp />
            </button>
                <p>{itemData.name} </p>
                <p>$ {Price.toFixed(3)}</p>
             
            
            <div className="endspace">
                    <div className="qtyinput">
                    <label htmlFor="qty">Qty:</label>
                 
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                  
                 
                
                     
                    </div>
                   
            </div>
        </div>
      
    </div>
  );
};

 //guarda y envia el nuevo estado o valor del contador
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

