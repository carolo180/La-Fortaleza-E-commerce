import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ cart }) => {
   
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

 useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      item.precio=parseInt(item.precio)	
      items += item.qty;
      price += item.qty * item.precio;
    
    });
    

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
 

  return (
    <div className="cart">
      <div className="everycart">
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className="alltotal">
        <h4>cart summary</h4>
        <div className="totalitems">
          <span> ({totalItems}) Products</span><br></br>
          <span>TOTAL: $ {totalPrice}</span>
        </div>
        <button className="sendboton">
          Go To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
