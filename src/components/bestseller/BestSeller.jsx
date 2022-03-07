import React from 'react'
import Carousel from "react-elastic-carousel";
import WideCard from "./WideCard";
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
   
    {"image":'https://http2.mlstatic.com/D_NQ_NP_984745-MLA44385258779_122020-W.jpg',
    "name":'Dvr Dahua Smd Plus ',
     "id":244,
     "precio":"$ 97.465"
   },
    {"image":'https://www.gvscolombia.com/assets/productos/lowres/R-DH-HAC-HDW1200MN-0360B.webp',
     "name":'DAHUA dh-hac-hdw1200',
      "id":2,
      "precio":"$ 112.000"
    },
    {"image":'https://camarasvideovigilanciapanama.com/admin/imagenes/W7C9J2F396DH-HAC-HFW1239TLMN-A-LED-0360B.jpg',
     "name":'DAHUA dh-hac-hfw -led', 
     "id":242,
     "precio":"$ 150.000"
    },
    {"image":'https://www.staq.store/wp-content/uploads/2020/04/DH-HAC-HFW1200DN-0360B-1-450x450.png',
     "name":'DAHUA dh-hac-hfw 1200', 
     "id":329,
     "precio":"$ 95.000"
    },
    {"image":'https://onlinecolombia.net/articulos/activos/imagenes/Dahua_HAC-HFW2401EN-0360B.jpg',
     "name":'DAHUA dh TIAZIN 0360B',
      "id":353,
      "precio":"$ 145.000"
    },
    {"image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse83WPJNlqTf3G6G_4rAzycxT0XsYeJz_yg&usqp=CAU',
     "name":'DAHUA DH-HAC-A-0360B',
      "id":265,
      "precio":"$ 75.000"
    },
    {"image":'https://http2.mlstatic.com/D_NQ_NP_609864-MCO41458060772_042020-V.jpg',
     "name":'DAHUA 1080p 3.6mm',
      "id":306,
      "precio":"$ 54.000"
    },
    {"image":'https://www.gvscolombia.com/assets/productos/highres/DH-HAC-HFW1200THN-A-0360B-S4.png',
    "name":'DAHUA DH-HFW1200THN',
     "id":1,
     "precio": "$ 150.000"
   },
    {"image":'https://http2.mlstatic.com/D_NQ_NP_2X_702474-MLA49003719960_022022-F.webp',
     "name":'Dvr Dahua 32 C/audio',
      "id":5,
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
              <button className='watchit'>Watch More</button>
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