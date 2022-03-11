import React, { useState, useEffect} from "react";
import MenuButton from "../menubutton/MenuButton";
import "./Header.css";
import Nav from "../nav/Nav";

import logo from "../../assets/img/logo.png"

const Header = ({location}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(()=>{
     window.addEventListener("scroll", () =>{
       setOpen(false)
     })
  },[])

  return (
  
    <div className='header' style={location==="/tienda" || location==="/carrito"  ? {"position":"absolute","marginTop":"2rem"} : {"position":"fixed"}}>
    
      <img src={logo} width="5%" alt='logo'/>
        <h1>LA FORTALEZA</h1>
        <p>Electronic Security</p>
     
       <div className='navigation'>
       <MenuButton open={open} handleClick={handleClick} />
       <Nav open={open} />
      
       </div>
       


    </div>

  )
}

export default Header