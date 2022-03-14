import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { connect } from "react-redux";

const Header2 = ({cart}) => {
     //info numero de productos en el nav
  const [cartCount, setCartCount] = useState(0)

  useEffect(()=>{
    let count = 0;
      cart.forEach((item) => {
      count += item.qty;
    });
     setCartCount(count);
 
 },[cart, cartCount])
 
  return (
    <>
        <div className='header2'>
          <img src={logo} width="5%" alt='logo' className="logo2"/>
          <h1 className="name2">LA FORTALEZA</h1>
          <p className="slogan2">Electronic Security</p>  

        <div className="nav2">
            <ul className="notorder">
              <li className='itemsmenu2'>
                <NavLink  to={"/"}><span className='itemmenu'>Home</span></NavLink >
                <NavLink to={`/tienda`}><span className='itemmenu'>Store</span></NavLink>
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
        </div>
      </div>  

    </>
  )
}
const mapStateToPropsNav = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

  export default connect(mapStateToPropsNav)(Header2);