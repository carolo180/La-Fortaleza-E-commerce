import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";

const CartItem = ({ itemData }) => {
 

  /*const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };*/

  return (
    <div className="allcart">
      <img src={itemData.image} alt={itemData.name} />
      <div className="infocart">
                <p>{itemData.name} </p>
                <p>$ {itemData.precio}</p>
            
            <div className="endspace">
                    <div className="qtyinput">
                    <label htmlFor="qty">Qty:</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={itemData.qty}
                    //  onChange={onChangeHandler}
                    />
                    </div>
                    <button
                    onClick={() => removeFromCart(itemData.id)}
                    
                    >
                
                    </button>
            </div>
        </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

