import React from 'react'
import "./AniBanner.css"
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

const AniBanner = () => {
  return (
    <div className='banner'>
        <div className='animation'>
          <h1 className='textanim'>We take all payment methods</h1>
            <FaCcMastercard className='iconbanner'/>
            <RiVisaLine className='iconbanner'/>
            <FaCcPaypal className='iconbanner'/>
        </div>

    </div>
  )
}

export default AniBanner