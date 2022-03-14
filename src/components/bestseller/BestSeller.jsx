import React from 'react'
import Carousel from "react-elastic-carousel";
import WideCard from "./WideCard";
import { NavLink } from "react-router-dom";
import "./WideCard.css"
import { Link as LinkRoute } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 640, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 },
  { width: 1280, itemsToShow: 7 },
  { width: 1536, itemsToShow: 7 }
];

const BestSeller = ({loadCurrentItem2}) => {
  const items = ([
    {
      "image":'https://bezpeka.club/wp-content/uploads/2019/12/dahua-dh-ipc-hfw1831ep-2-8-mm.jpg',
      "name":'DAHUA dh TIAZIN 0360B',
      "category":"Camaras",
      "description":"Equipped with a 2MP CMOS sensor and a 2.7-12mm varifocal lens, this camera captures video at resolutions up to 1920 x 1080 at 30 fps in a 101.7 to 32.3° field of view. The camera.",
       "id":5,
       "precio": 145.000
      },
      {
        "image":'https://www.intelsegurity.com/wp-content/uploads/2020/04/K40Grande-600x600.png',
        "name":"ZKT control wireless",
        "category":"Control de accesos",
         "id":15,
        "description":"K40 es una elegante e innovadora terminal biométrica IP diseñada para gestionar la asistencia de empleados y controlar el acceso de una puerta, Es posible administrarlo por red a través de su interfaz TCP/IP y cuenta.",
         "precio": 385.000
      },
      {
        "image":'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/6971744239206.jpg',
         "name":"DAHUA Inalámbrica 1080",
         "category":"Camaras",
         "id":7,
          "description":"Cámara Wi-fi de videovigilancia tipo bala para exterior con visión nocturna a color. Resolución Full HD, compresión de video H265, Certificado IP67, ranura para tarjeta MicroSD de hasta 256 GB,",
          "precio": 154.000
      },
   
      {
        "image":'https://www.cqnetcr.com/87003-thickbox_default/xvr-dahua-4chpentahibrido-5mp-1080p-hdmivga.jpg',
        "name":'Dvr Dahua Pentahíbrido',
        "category":"DVR'S",
        "description":"Grabador Xvr Dahua De 4 canales, Pentahíbrido 5mp 1080p,  Hdmi/vga, 1 Sata Port, Hasta 6 Tb De Capacidad.1 Rj-45 Port (100 Mb) función De Red Http, Https, Tcp/ip, Ipv4/ip.",
        "id":17,
        "precio": 52.530
      },
      {
        "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMeMiWvKsx_h1hCQDN6ORtFCrMLDSO12SsrILkdwxCmxQRUnph9la11AmQ1zVxJ7-QHc&usqp=CAU',
        "name":'DAHUA Inalámbrica 2030p',
        "category":"Camaras",
        "description":"La C1HC es una cámara de seguridad compacta que funciona a la perfección. Con funciones esenciales como visión nocturna de 12 metros (40 pies), conversación bidireccional e instalación sencilla, esta cámara.",
         "id":8,
         "precio":  150.000
      },
      {
        "image":'https://www.staq.store/wp-content/uploads/2020/04/DH-HAC-HFW1200DN-0360B-1-450x450.png',
        "name":'DAHUA dh-hac-hfw 1200', 
        "category":"Camaras",
        "description":"Sensor de imagen: 1 / 2.7 «CMOS Píxeles efectivos: 1920 (H) × 1080 (V), 2MP Sistema de escaneo: Progresivo Velocidad de obturador electrónico: PAL: 1 / 4s ~ 1 / 100,000s",
        "id":4,
        "precio": 95.000
      },
      {
        "image":'https://tienda.occonsultores.com/wp-content/uploads/2021/03/SF200Grande.png',
        "name":'Biométrico SF200',
        "category":"Control de accesos",
        "description":"Terminal Biométrica para Control de Acceso y Gestión de Asistencia / 1,500 huellas / 80,000 registros / TCP/IP, RS485 / Interfaz de Control de Acceso con Cerradura Eléctrica, Sensor de Puerta, Botón de Salida, Timbre",
        "id":9,
        "precio": 256.000
      },
      {
        "image":'https://www.cqnetcr.com/59840-thickbox_default/camara-ip-dahua-hfw1320s-w-3mp-wifi-ip67-30m-28mm.jpg',
        "name":'Camara-IP-DAHUA-4Mpx',
        "category":"Camaras",
        "description":"Camara marca DAHUA, Sensor de imagen: 1/3” Progressive CMOS Resolución máxima:  4 Mpx (2688x1520) Tasa Main Stream: 4Mp (1~20fps) / 3Mp (1 ~ 25fps) Tasa Extra Stream:  D1/CIF (1 ~ 25 FPS)",
        "id":1,
        "precio": 97.465
      },
      {
        "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR467QXQQPuoBpxClDot7pat0E4xrA-LCwJK4ridtz13E0cgRa2iW8FO9KwRtdr8gomEMY&usqp=CAU',
        "name":'Hikvision Dvr-7100',
        "category":"DVR'S",
        "description":"Entrada de audio: 4 canales, Entrada de video analógico y HD-TVI: Conexión de 8 canales, interfaz BNC (1.0Vp-p, 75 Ω),Interfaz de entrada de video: BNC (1.0 Vp-p, 75Ω), Compresión de audio: G.711u,Interfaz de entrada de audio: 4 canales, RCA (2.0 Vp-p, 1 KΩ), Audio bidireccional",
         "id":24,
         "precio": 92.450
      },
   
]);
  return (
    <div className="container-carousel">
      <div className='blakhole'>Top ten</div>
    <h1 className='titleseccarr'>Our Top 10  Best Seller</h1>
    <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
        {items.map((product) => (
        <WideCard key={product.id}>
          <img src={product.image}  style={{borderRadius: 15 + 'px'}, {width: 90 + 'px'}, {height: 90 + 'px'}}/>
          <div className='infocarru'>
              <p className="textName">{product.name}</p>
              <h5 className='costcarr'>$ {product.precio.toFixed(3)}</h5>
              <NavLink to={`/bestseller/${product.id}`}>
                  <button className='watchit'
                    onClick={() => loadCurrentItem2(product)}> Watch More </button>
              </NavLink>
 
          </div>
        </WideCard>
        
        ))}
       
        </Carousel>
       
    </div>

  
    <div className='allproducts'>
               <div id="botonci">
                  <LinkRoute to={"/tienda"} className="cta" data-bs-target="#polys">       
                      <span>all our products here</span>
                      <svg width="20px" height="20px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                  </LinkRoute>                 
                </div> 
                     
    </div>
</div>
  )
}


const mapDispatchToPropsBestSeller = (dispatch) => {
  return {
   
    loadCurrentItem2: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null, mapDispatchToPropsBestSeller)(BestSeller);
