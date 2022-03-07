import React, { useState } from "react";
import MenuButton from "../menubutton/MenuButton";
import "./Header.css";
import Nav from "../nav/Nav";

import logo from "../../assets/img/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  
    <div className='header'>
    
      <img src={logo} width="5%"alt='logo'/>
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