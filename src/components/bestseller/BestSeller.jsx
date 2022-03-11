import React from 'react'
import Carousel from "react-elastic-carousel";
import WideCard from "./WideCard";
import ModalProduct from "../sectcamaras/ModalProduct";
import "./WideCard.css"
import { Link as LinkRoute } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 640, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 },
  { width: 1280, itemsToShow: 7 },
  { width: 1536, itemsToShow: 7 }
];

const BestSeller = () => {
  const items = ([
    {
      "image":'https://bezpeka.club/wp-content/uploads/2019/12/dahua-dh-ipc-hfw1831ep-2-8-mm.jpg',
       "name":'DAHUA dh TIAZIN 0360B',
       "category":"Camaras",
       "description":"Equipped with a 2MP CMOS sensor and a 2.7-12mm varifocal lens, this camera captures video at resolutions up to 1920 x 1080 at 30 fps in a 101.7 to 32.3° field of view. The camera.",
        "id":5,
        "precio":"$ 145.000"
      },
      {
        "image":'https://www.intelsegurity.com/wp-content/uploads/2020/04/K40Grande-600x600.png',
        "name":"ZKT control wireless",
        "category":"Control de accesos",
         "id":15,
         "description":"K40 es una elegante e innovadora terminal biométrica IP diseñada para gestionar la asistencia de empleados y controlar el acceso de una puerta, Es posible administrarlo por red a través de su interfaz TCP/IP y cuenta.",
         "precio":"$ 385,000"
      },
      {
        "image":'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/6971744239206.jpg',
       "name":"DAHUA Inalámbrica 1080",
       "category":"Camaras",
        "id":7,
        "description":"Cámara Wi-fi de videovigilancia tipo bala para exterior con visión nocturna a color. Resolución Full HD, compresión de video H265, Certificado IP67, ranura para tarjeta MicroSD de hasta 256 GB,",
        "precio":"$ 54.000"
      },
   
      {"image":'https://http2.mlstatic.com/D_NQ_NP_984745-MLA44385258779_122020-W.jpg',
      "name":'Dvr Dahua Smd Plus ',
      "id":17,
      "precio":"$ 97.465"
      },
      {
        "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMeMiWvKsx_h1hCQDN6ORtFCrMLDSO12SsrILkdwxCmxQRUnph9la11AmQ1zVxJ7-QHc&usqp=CAU',
        "name":'DAHUA Inalámbrica 2030p',
        "category":"Camaras",
        "description":"La C1HC es una cámara de seguridad compacta que funciona a la perfección. Con funciones esenciales como visión nocturna de 12 metros (40 pies), conversación bidireccional e instalación sencilla, esta cámara.",
        "id":8,
        "precio": "$ 150.000"
      },
      {
        "image":'https://www.tienda24hs.com/WebRoot/StoreES/Shops/62148069/5AED/6EAD/09F9/6989/308A/0A0C/6D0A/C5F2/18070-Camara-bullet-IP-2MPX-1080p-A-Tienda24hs_ml.JPG',
        "name":'DAHUA dh-hac-hfw -led', 
        "category":"Camaras",
        "categorys":"Todo",
        "description":"CÁMARA DE SEGURIDAD DAHUA. 4 EN 1 2MP FULL HD 1080P. TIPO BALA METÁLICA PLÁSTICA. USO EXTERIOR Ó INTERIOR LENTE FIJO 3,6MM FOV 88°. DWDR.VISIÓN NOCTURNA CON LED INFRARROJOS IR 80METROS.",
        "id":3,
        "precio":"$ 150.000"
      },
      {
        "image":'https://tienda.occonsultores.com/wp-content/uploads/2021/03/SF200Grande.png',
        "name":'Biométrico SF200',
        "category":"Control de accesos",
        "description":"Terminal Biométrica para Control de Acceso y Gestión de Asistencia / 1,500 huellas / 80,000 registros / TCP/IP, RS485 / Interfaz de Control de Acceso con Cerradura Eléctrica, Sensor de Puerta, Botón de Salida, Timbre",
        "id":9,
        "precio":"$ 256.000"
      },
      {
        "image":'https://www.cqnetcr.com/59840-thickbox_default/camara-ip-dahua-hfw1320s-w-3mp-wifi-ip67-30m-28mm.jpg',
        "name":'Camara-IP-DAHUA-4Mpx',
        "category":"Camaras",
        "categorys":"Todo",
        "description":"Camara marca DAHUA, Sensor de imagen: 1/3” Progressive CMOS Resolución máxima:  4 Mpx (2688x1520) Tasa Main Stream: 4Mp (1~20fps) / 3Mp (1 ~ 25fps) Tasa Extra Stream:  D1/CIF (1 ~ 25 FPS)",
        "id":1,
        "precio":"$ 97.465"
      },
      {"image":'https://http2.mlstatic.com/D_NQ_NP_2X_702474-MLA49003719960_022022-F.webp',
      "name":'Dvr Dahua 32 C/audio',
        "id":25,
        "precio":"$ 82.550"
      },
   
]);
  return (
    <div className="container-carousel">
      <div className='blakhole'>Top ten</div>
    <h1 className='titleseccarr'>Our Top 10  Best Seller</h1>
    <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
        <WideCard key={item.id}>
          <img src={item.image}  style={{borderRadius: 15 + 'px'}, {width: 90 + 'px'}, {height: 90 + 'px'}}/>
          <div className='infocarru'>
              <p className="textName">{item.name}</p>
              <h5 className='costcarr'>{item.precio}</h5>
              <button className='watchit' data-bs-toggle="modal" data-bs-target={`#id${item.id}`}>Watch More</button>

              <ModalProduct idmodal={`id${item.id}`} imagemodal={item.image} titumodal={item.name} descripmodal={item.description} precio={item.precio} />
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

export default BestSeller