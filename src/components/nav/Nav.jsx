import React from 'react'
import {Link} from 'react-scroll';
import { Link as LinkRoute } from "react-router-dom";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import {FaRegUserCircle} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Nav = ({ open, cart }) => {

 
const [cartCount, setCartCount] = useState(0)

useEffect(()=>{

   let count = 0;
   cart.forEach((item) => {
     count += item.qty;
   });

   setCartCount(count);
},[cart, cartCount])
  

 const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
   align-items: center;
  background-color:#0a001b;
  position: fixed;
  top: 120px;
  right: ${props => (props.open ? "0" : "-100%")};
   width: 100%;
  height: 50vh;
  transition: right 1s linear;
  padding-top:5vh;
  font-family: 'Poppins', sans-serif;

  ul{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    height:20vh;
    align-items: center;
    font-weight:bold;
    color:white;
    padding-left:0%;
  }
  a{
    color:white;
    text-decoration:none;
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
      justify-content: space-around;
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


.borderIcon{
    background-color: #97D711;
    border-radius: 100px;
    width: 12vw;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
 
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
  const handleClickItem = ()  =>{
    <NavWrapper open={!open} />
   
  }
  
;
  return (
    <NavWrapper open={open}>
        <ul>
          <li className='itemsmenu'>
        <LinkRoute to={"/"}><span className='itemmenu'>Home</span></LinkRoute>
          <Link to={`container-carousel`} smooth={true} offset={-70} duration={500}><span className='itemmenu'>Products</span></Link>
          <Link to={`Ubication`} smooth={true} offset={-70} duration={500}><span className='itemmenu' onClick={e => { e.preventDefault(); handleClickItem(); }}>Contact</span></Link>
          </li>
          <li>
          <LinkRoute to={"/carrito"}>
            <div className='borderIcon'>
             
              {cartCount} Products
              <FaCartPlus  className='navIcon' />
              
           </div>
           </LinkRoute> 
           </li>
        </ul>
       
       
      

    </NavWrapper>
  )
}
const mapStateToProps = (state) =>{
  return{
    cart:state.shop.cart
  }
}

export default connect (mapStateToProps)(Nav) 