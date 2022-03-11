import React from 'react'
import "./AboutUs.css"
import { FaHome } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='about'>
      <div className='aboutus'>
        <h1>About us</h1>
      </div>
       
        <div className="aboutcontain">
            <article className='abouthome'>
                <FaHome className='iconabout'/>
                <h3 className='titlehome'>Protected And More Smart Homes</h3>
                <p>Observe in real time any area of your property, 
                    inside and outside, with amazing monitoring from your mobile dispositives,
                    possibilities: visual recognition, temperature,
                    movement, infrared, Artificial Intelligence, etc. 
                    Here we look at the best home alarm systems for
                     different needs. </p>
            </article>
            <article className="abouthome">
                <MdSecurity className='iconabout'/>
                <h3 className='titlehome'>Safe And More Efficient Business</h3>
                <p>Monitoring systems allow much more than preventing or
                   analyzing incidents. Implementing them efficiently, 
                   they connect you with your business, in real time and
                   from anywhere.Here we look at the best business alarm and monitoring camaras systems for
                   your business.</p>
            </article>
            
        </div>
        

    </div>
  )
}

export default AboutUs