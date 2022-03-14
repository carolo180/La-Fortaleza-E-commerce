import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='middlefoot'>
            <article className='marca'>
            <h1 className='titlefoot'>LA FORTALEZA</h1>
            <p className='slogan'>Electronic Security</p>
            </article>
            <div className='qr'>
            <QRCode value="https://carolo180.github.io/La-fortaleza-E-commerce/" size="80" />
            <p className='parafoqr'>Scan your QR code.</p>
            </div>
            <article className="logos">
            <BsFacebook className="iconlogos"/>
            <AiFillTwitterCircle className="iconlogos" />
            <AiFillInstagram className="iconlogos" />
            </article>
        </div>
        <p className='mywork'>© COPYRIGHT 2022   Surfing Whales - Code & Creative Lab</p>
       

    </div>
  )
}

export default Footer