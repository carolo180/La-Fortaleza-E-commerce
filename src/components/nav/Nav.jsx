import React from 'react'
import {Link} from 'react-scroll';
import { Link as LinkRoute } from "react-router-dom";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import {FaRegUserCircle} from "react-icons/fa"
import {useState} from "react";


const Nav = ({ open }) => {
 const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
   align-items: center;
  background-color:#8f8e8e;
  position: fixed;
  top: 120px;
  right: ${props => (props.open ? "0" : "-100%")};
   width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
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
  }
  .icons{
    width: 30%;
    height:10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      justify-content: space-around;
      width: 40%;
      height: 3.2rem;
      align-items: center;
      font-weight: bold;
      color: #12003D;
      flex-direction:row;
      font-size:1rem;
  
    }
    .itemmenu{
      font-size:1.1rem;
      text-decoration:none;
    }
    .icons{
      width: 10%;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      margin-right: 1.5rem;
      margin-top:0%;
       }
  }


.borderIcon{
    background-color: #97D711;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navIcon{
  font-size: 1.5rem;
}
.borderIcon:hover{
    background-color: #12003D;
    width: 40px;
    height: 40px;
 }
 .borderIcon:hover .navIcon{
    color: #ffffff;
 }
`;
  return (
    <NavWrapper open={open}>
        <ul>
        <LinkRoute to={"/"}><span className='itemmenu'>Home</span></LinkRoute>
          <Link to={`container-carousel`} smooth={true} offset={-70} duration={600}><span className='itemmenu'>Products</span></Link>
          <Link to={`Ubication`} smooth={true} offset={-70} duration={500}><span className='itemmenu'>Contact</span></Link>
        </ul>
        <div className='icons'>
            <div className='borderIcon'>
             <FaRegUserCircle  className='navIcon'/>
            </div>
            <div className='borderIcon'>
             <FaCartPlus  className='navIcon' />
            </div>
          
        </div>

    </NavWrapper>
  )
}

export default Nav