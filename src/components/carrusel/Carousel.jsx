import React from 'react'
import "./Carousel.css"
import car1 from "../../assets/img/carone.png"
import garden from "../../assets/img/home.png"
import {Link} from 'react-scroll';


const Carousel = () => {
  return (
    <div className='carru'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <h1 className='titlecar'>Business Security Systems</h1>  
                <p className='parracar'>Monitoring, intrusion and access<br /> systems for companies.</p>  
                <Link to={`about`}>
                  <button className='butcar'>Watch More</button> 
                </Link>
                
                <img src={car1} class="img_car d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <h1 className='titlecar2'>Protect Your Home</h1>  
                <p className='parracar2'>Monitoring from your cell phone anywhere, anytime.</p>  
                <Link to={`about`}>
                <button className='butcar2'>Watch More</button>
                </Link>
                
                <img src={garden} class="img_car d-block w-100" alt="..." />
            </div>
           
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carousel