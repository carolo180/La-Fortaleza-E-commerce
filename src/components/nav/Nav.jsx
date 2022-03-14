import React from 'react'
import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Nav = ({ open, cart }) => {

 const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
   align-items: center;
  background-color:#0a001b;
  position: absolute;
  top: 120px;
  display: ${props => (props.open ? "contain" : "none")};
  right: ${props => (props.open ? "0" : "-100%")};
   width: 100%;
  height: 50vh;
  transition: right 1s linear;
  padding-top:5vh;
  font-family: 'Poppins', sans-serif;
  z-index:999;

  ul{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    height:40vh;
    align-items: center;
    font-weight:bold;
    color:white;
    padding-left:0%;
  }
  a{
    color:white;
    text-decoration:none;
  }
  .itemsmenu{
    width:50%;
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    alig-items:center;
    text-align:center;
    }
 
  @media only screen and (min-width: 624px) {
    display:flex;
    position: initial;
    flex-direction:row;
    background-color:#a68ec531;
    font-family: 'Poppins', sans-serif;
    height: 3.2rem;
    justify-content: space-between;
    padding-top:4vh;
    margin-top:1px;

    ul{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 3.2rem;
      align-items: center;
      font-weight: bold;
      color: #12003D;
      flex-direction:row;
      font-size:1rem;
      }
    .itemsmenu{
      width:50%;
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      height:3.2rem;
      align-items: center;
      }
    .itemmenu{
      font-size:1.1rem;
      text-decoration:none;
    }
   
       a{
        color:#0a001b;
        text-decoration:none;
      }
    
      .itemmenu:hover{
        cursor:pointer;
        color: #11E7B3;
        transition-property:initial;   
        transition-duration: 0.5s;
      }
     }

.navIcon{
  font-size: 1.5rem;
}
.borderIcon:hover{
    background-color: #11E7B3;
    width: 14vw;
    transition-property:initial;   
    transition-duration: 0.5s;
 }
 .borderIcon:hover .navIcon{
    color: #ffffff;
 }
`
//estado que inicializa el contador de referencia del carrito en el nav
const [cartCount, setCartCount] = useState(0)

//setea los valores que se van agregando al carrito
useEffect(()=>{
   let count = 0;
   //recorre todo el array del carrito, busca el valor del contador(qty) de cada item
   //y lo suma a la variable count
   cart.forEach((item) => {
     count += item.qty;
   });
   //setea el valor de count en la constante carCount que es la que se mostrara en el nav
   setCartCount(count);
},[cart, cartCount])

;
  return (
    <NavWrapper open={open}>
        <ul>
          <li className='itemsmenu'>
        <NavLink  to={"/"}><span className='itemmenu'>Home</span></NavLink >
          <Link to={`container-carousel`} smooth={true} offset={-70} duration={500}><span className='itemmenu'>Products</span></Link>
          <Link to={`Ubication`} smooth={true} offset={-70} duration={500}><span className='itemmenu'>Contact</span></Link>
          </li>
          <li>
          <NavLink to={"/carrito"}>
            <div className='borderIcon'>
               {cartCount} Products
           <FaCartPlus  className='navIcon' />
            </div>
           </NavLink > 
           </li>
        </ul>
    </NavWrapper>
  )
}
//funcion que trae los datos del estado del carrito(cart) desde el shopping reducer
const mapStateToProps = (state) =>{
  return{
    cart:state.shop.cart
  }
}

export default connect (mapStateToProps)(Nav) 