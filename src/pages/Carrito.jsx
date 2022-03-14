import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import Header2 from "../components/header2/Header2";


const Cart = ({ cart }) => {

   //estado inicial del precio total y de las unidades
   const [totalPrice, setTotalPrice] = useState(0);
   const [totalItems, setTotalItems] = useState(0);
   
   //trae el estado actual de los productos agregados al carrito
  const [articulos, setArticulos] = useState("");
  const [preciounidad, setPrecioUnidad] = useState(0);
  console.log(articulos)

  
  //trae el estado actual del precio total y  el total de unidades 
 useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      item.precio=parseFloat(item.precio);
      items += item.qty;
      price += item.qty * item.precio;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

 
  useEffect(() => {
    let articuloso = ""
    let valor = 0
    cart.forEach((item) => {
      articuloso += item.name;
      valor += item.precio;
          });

          setArticulos(articuloso);
          setPrecioUnidad(valor);
    },[cart, articulos, preciounidad, setArticulos, setPrecioUnidad]);

     //funcion que envia los datos al whatsapp
 /* function gotowhatsapp() {

     var url = "https://wa.me/573044531854?text="+"Hola soy carolina estoy entereseda en los"
          + "articulo: " + articulos + "%0a"
          + "Precio: " + preciounidad.toFixed(3) + "%0a"
          window.open(url, '_blank').focus();
           <button className="sendboton" onClick={e => { e.preventDefault(); gotowhatsapp(); }}>
  }*/



  return (
    <>
        <Header2 />
      <div className="carto">
      <div className="everycarto">
        
        {totalItems === 0 && (
                `¡ HERE IS ANY PRODUCTS FOR YOU YET !`
              ) }
          {cart.map((item) => (
            <CartItem key={item.id} itemData={item} />
          ))}
      
      </div>
      <div className="alltotal">
        <h4>cart summary</h4>
        <div className="totalitems">
          <span> ({totalItems}) Products</span><br></br>
          <span>TOTAL: $ {totalPrice.toFixed(3)}</span>
        </div>
        <NavLink to="/formulario">
            <button className="sendboton">
              Go To Checkout
            </button>
        </NavLink>
       
      </div>
    </div>
    </>
   
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
