import Products from "./Products";
import "./Products.css"
import { useState} from "react";



const SectProducts = () => {
  const [categorys, setCategory] = useState("");
  const [filteringKeyword, setFilteringKeyword] = useState("");
  
  const products = ([
   
    {
     "image":'https://www.cqnetcr.com/59840-thickbox_default/camara-ip-dahua-hfw1320s-w-3mp-wifi-ip67-30m-28mm.jpg',
     "name":'Camara-IP-DAHUA-4Mpx',
     "category":"Camaras",
     "description":"Camara marca DAHUA, Sensor de imagen: 1/3” Progressive CMOS Resolución máxima:  4 Mpx (2688x1520) Tasa Main Stream: 4Mp (1~20fps) / 3Mp (1 ~ 25fps) Tasa Extra Stream:  D1/CIF (1 ~ 25 FPS)",
     "id":1,
     "precio":"$ 97.465"
   },
    {
     "image":'https://www.orbitadigital.com/321025-large_default/dh-hac-hdw1200tlmp-a-poc-0280b-s5.jpg',
     "name":'DAHUA dh-hac-hdw1200',
     "category":"Camaras",
      "description":"Domo 4 en 1 Dahua PoC. 2MP@25ips. Salida 4 en 1 conmutable. ICR, 0,02 lux, Smart IR 30m. Óptica fija de 2,8 mm. WDR digital, 2D-NR. Incorpora micrófono. IP67, 3AXIS, PoC.",
      "id":2,
      "precio":"$ 112.000"
    },
    {
     "image":'https://www.tienda24hs.com/WebRoot/StoreES/Shops/62148069/5AED/6EAD/09F9/6989/308A/0A0C/6D0A/C5F2/18070-Camara-bullet-IP-2MPX-1080p-A-Tienda24hs_ml.JPG',
     "name":'DAHUA dh-hac-hfw -led', 
     "category":"Camaras",
     "description":"CÁMARA DE SEGURIDAD DAHUA. 4 EN 1 2MP FULL HD 1080P. TIPO BALA METÁLICA PLÁSTICA. USO EXTERIOR Ó INTERIOR LENTE FIJO 3,6MM FOV 88°. DWDR.VISIÓN NOCTURNA CON LED INFRARROJOS IR 80METROS.",
     "id":3,
     "precio":"$ 150.000"
    },
    {
     "image":'https://www.staq.store/wp-content/uploads/2020/04/DH-HAC-HFW1200DN-0360B-1-450x450.png',
     "name":'DAHUA dh-hac-hfw 1200', 
     "category":"Camaras",
     "description":"Sensor de imagen: 1 / 2.7 «CMOS Píxeles efectivos: 1920 (H) × 1080 (V), 2MP Sistema de escaneo: Progresivo Velocidad de obturador electrónico: PAL: 1 / 4s ~ 1 / 100,000s",
     "id":4,
     "precio":"$ 95.000"
    },
    {
     "image":'https://bezpeka.club/wp-content/uploads/2019/12/dahua-dh-ipc-hfw1831ep-2-8-mm.jpg',
     "name":'DAHUA dh TIAZIN 0360B',
     "category":"Camaras",
     "description":"Equipped with a 2MP CMOS sensor and a 2.7-12mm varifocal lens, this camera captures video at resolutions up to 1920 x 1080 at 30 fps in a 101.7 to 32.3° field of view. The camera.",
      "id":5,
      "precio":"$ 145.000"
    },
    {
     "image":'https://grupocontrol.co/wp-content/uploads/2020/07/base-producto.jpg',
     "name":'DAHUA DH-HAC-A-0360B',
     "category":"Camaras",
      "id":6,
      "description":"CÁMARA BALA METÁLICA 4 EN 1HDCVI/HDTVI/AHD/CVBS, 1/2,7 CMOS, Resolución 1080P 2MP / Lente 3,6mm / Smart IR/ Alcance IR hasta 80 mts DWDR, Day/Night(ICR), AWB, AGC, BLC, 2DNR, IP67",
      "precio":"$ 75.000"
    },
    {
     "image":'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/6971744239206.jpg',
     "name":"DAHUA Inalámbrica 1080",
     "category":"Camaras",
     "id":7,
      "description":"Cámara Wi-fi de videovigilancia tipo bala para exterior con visión nocturna a color. Resolución Full HD, compresión de video H265, Certificado IP67, ranura para tarjeta MicroSD de hasta 256 GB,",
      "precio":"$ 54.000"
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
    "image":'https://tienda.occonsultores.com/wp-content/uploads/2021/03/SF200Grande.png',
    "name":'Biométrico SF200',
    "category":"Control de accesos",
    "description":"Terminal Biométrica para Control de Acceso y Gestión de Asistencia / 1,500 huellas / 80,000 registros / TCP/IP, RS485 / Interfaz de Control de Acceso con Cerradura Eléctrica, Sensor de Puerta, Botón de Salida, Timbre",
    "id":9,
    "precio":"$ 256.000"
  },
   {
    "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSza6K9xjSBPwCyN2YGpj3LCr3J9B8XvOWcqT7TVouLHrwh3Nb6iCm6N8Ur6UwYw4bNQ_E&usqp=CAU',
    "name":'ZKTeco Biométrico IP F18',
    "category":"Control de accesos",
    "description":"F18 es un innovador lector biométrico de huellas dactilares para aplicaciones de control de acceso. Con compacto diseño y un ﬁrmware que permite funciones de alto rendimiento, se ha convertido en uno de los dispositivos.",
     "id":10,
     "precio":"$ 112.000"
   },
   {
    "image":'http://d3ugyf2ht6aenh.cloudfront.net/stores/855/772/products/1a1-5c2f689ddc67d444b015359913391152-640-0.jpg',
    "name":'ZKTeco Biométrico TF1700', 
    "category":"Control de accesos",
    "description":"CÁMARA DE SEGURIDAD DAHUA. 4 EN 1 2MP FULL HD 1080P. TIPO BALA METÁLICA PLÁSTICA. USO EXTERIOR Ó INTERIOR LENTE FIJO 3,6MM FOV 88°. DWDR.VISIÓN NOCTURNA CON LED INFRARROJOS IR 80METROS.",
    "id":11,
    "precio":"$ 150.000"
   },
   {
    "image":'https://compratecno.cl/img/cms/compratecno-zk-f19.png',
    "name":'ZK F19 LECTORA IP', 
    "description":"El ZK F19 es un elegante e innovador lector biométrico de huella digital para aplicaciones de control de acceso o gestión de asistencia de empleados,Incorpora el más rápido y preciso algoritmo de identificación de huella.",
    "id":12,
    "category":"Control de accesos",
    "precio":"$ 214.435"
   },
   {
    "image":'https://virec.cl/wp-content/uploads/2021/05/lector-biometrico-autonomo-mifare-dahua-asi1212a.png',
    "name":'DAHUA Biometrico Standal',
    "category":"Control de accesos",
    "description":"El control de acceso profesional modelo ASI1212AD standalone, cuenta con un teclado táctil y pantalla LCD. Tiene un sensor óptico que es resistente a ralladuras, golpes de bajo impacto, vibraciones y descargas estáticas. ",
     "id":13,
    "precio":"$ 116.412"
   },
   {
    "image":'http://www.fredcoms.com/wp-content/uploads/2019/10/r7.jpg',
    "name":'ZK Biometrico ZK-MB360ID',
    "category":"Control de accesos",
     "id":14,
    "description":"Cerradura eléctrica y botón de salida. Función de cámara que permite tomar fotos para funciones de asistencia y captura por eventos. Múltiples modos de verificación: rostro & huella & contraseña. ",
     "precio":"$ 595.000"
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
   "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi5cZKIccHTcAkNQiNW9datQYPjb4QGLdpGRzFFDZVQ8iw8Ar84u_rPjgD6CQNF6Y28I&usqp=CAU',
   "name":'RFID Reader RFID access',
   "category":"Control de accesos",
   "description":"TIEMPO Y ASISTENCIA SENSOR SILKID 3000 HUELLAS 10000 TARJETAS TCP/IP 5V DC INCLUYE ADMS.",
    "id":16,
    "precio": "$ 450.000",
  
  },
  {
    "image":'https://www.cqnetcr.com/87003-thickbox_default/xvr-dahua-4chpentahibrido-5mp-1080p-hdmivga.jpg',
    "name":'Dvr Dahua Pentahíbrido',
    "category":"DVR'S",
    "description":"Grabador Xvr Dahua De 4 canales, Pentahíbrido 5mp 1080p,  Hdmi/vga, 1 Sata Port, Hasta 6 Tb De Capacidad.1 Rj-45 Port (100 Mb) función De Red Http, Https, Tcp/ip, Ipv4/ip.",
    "id":17,
    "precio":"$ 52.530"
  },
   {
    "image":"https://elsalvador.diselsa.com/web/image/product.template/5155/image",
    "name":'Hikvision DVR 1B04H',
    "category":"DVR'S",
    "description":"CANALES: 4 CANALES, RESOLUCIÓN: 4M-N/1080P, SERIE: COOPER SERIES, TAMAÑO: 1U COMPACTO, COMPRESIÓN DE VIDEO: H.265+, TIPO DE SEÑAL DE VIDEO DE ENTRADA: TVI/AHD/CVI/CVBS, ENTRADAS/SALIDA DE AUDIO: 1 ENTRADA / 1 SALIDA, SOPORTE PARA CÁMARAS IP: 4 + 2 CANALES IP.",
     "id":18,
     "precio":"$ 72.000"
   },
   {
    "image":'https://ae01.alicdn.com/kf/HTB12EePd6gy_uJjSZKPq6yGlFXav/HIKVISION-DS-7204HQHI-K1-H-265-TURBO-4-DVR-reemplazar-DS-7204HQHI-F1-N-4ch-hasta.jpg',
    "name":'Hikvision DS-7204HQHI', 
    "category":"DVR'S",
    "description":"DS-7204HQHI-K1, Turbo HD DVR, • H.265 +/H.265/H.264 +/H.264 codificación para el flujo principal, Y H.265/H.264 para el subflujo de cámaras analógicas, Autoadaptativa HDTVI/HDCVI/AHD/CVBS entrada de señal, Conexión a H.265 +/H.264/H.264 +/H.264 cámaras IP.",
    "id":19,
    "precio":"$ 63.800"
   },
   {
    "image":'https://www.orbitadigital.com/307349-large_default/dahua-hcvr8208a-s3-dvr-dahua-4-en-1-856ch-h264-coloso-pro-2hdd-nn.jpg',
    "name":'Dahua HCVR8208A-S3', 
    "description":"DVR HD-CVI Tríbrido de 8 canales analógicos 960H y/o HD-CVI 1080P/720P + 56 canales IP 12MP. H264. 4 entradas / 1 salida de audio. Reproduce a la vez todos los canales. 1080P, 720P, 960H, D1/4CIF, CIF, QCIF, llegando a full 1080P a 30 ips. 2 salidas HDMI.",
    "id":20,
    "category":"DVR'S",
    "precio":"$ 93.435"
   },
   {
    "image":"https://www.bmasdigital.com/image/cache/data/productos/DS7204HQHIF1N-l-500x500.PNG",
    "name":'HIK DVR/NVR 5',
    "category":"DVR'S",
    "description":"Tecnología Turbo HD 3MP ver. 3.0.,Soporte de tecnologías: HD-TVI, Analogico, IP y AHD, Acceso remoto: PC (WINDOWS / MAC), Smart Phone (iPhone, iPad, Android), Compatibilidad con navegador Chrome (IE tab), Safari, Internet Explorer, Software cliente multi sitio de hasta 64 canales.",
     "id":21,
    "precio":"$ 76.412"
   },
   {
    "image":'https://exitocol.vtexassets.com/arquivos/ids/295711/XVR-Pentahibrido-4-Canales-Dahua-DHI-XVR5104HS-S2-1080mp.jpg?v=637003225598730000',
    "name":'DAHUA Pentahibrido XVR510',
    "category":"DVR'S",
     "id":22,
    "description":"Procesador integrado/Compresión de video H.264 + / H.264 de doble flujo/Admite entradas de video HDCVI / AHD / TVI / CVBS / IP/Máx. 6/12/24 canales de entradas de cámara IP, Compatibilidad con navegador Chrome (IE tab), Safari, Internet Explorer, Software cliente multi sitio.",
     "precio":"$ 95.890"
   },
   {
    "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUcDG6UGrlRc2e8kM3KyC23D1PubuIAuniQg6NHLMB0XnsRrlDttr7ZfpKY5PaCkEfx0&usqp=CAU&ec=47921207',
    "name":"CCTV DVR HD de 8 canales",
    "category":"DVR'S",
     "id":23,
    "description":"El Kit de vigilancia DVR CCTV HD de 8 canales de TRENDnet, modelo TV-DVR208K, ofrece una solución completa de video, almacenamiento y administración. El kit DVR viene con una unidad de disco duro de 1 TB preinstalada y ocho cámaras analógicas HD con infrarrojos a 1080p,",
     "precio":"$ 85,650"
   },
   {
   "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR467QXQQPuoBpxClDot7pat0E4xrA-LCwJK4ridtz13E0cgRa2iW8FO9KwRtdr8gomEMY&usqp=CAU',
   "name":'Hikvision Dvr-7100',
   "category":"DVR'S",
   "description":"Entrada de audio: 4 canales, Entrada de video analógico y HD-TVI: Conexión de 8 canales, interfaz BNC (1.0Vp-p, 75 Ω),Interfaz de entrada de video: BNC (1.0 Vp-p, 75Ω), Compresión de audio: G.711u,Interfaz de entrada de audio: 4 canales, RCA (2.0 Vp-p, 1 KΩ), Audio bidireccional",
    "id":24,
    "precio": "$ 92.450",
  
  },
  
] );

function searchCategory(categorys) {
  return function(x){
    return x.category.includes(categorys) || !categorys;
   }
  }

  function searchInput(filteringKeyword){
    return function(x){
      return x.name.includes(filteringKeyword) || !filteringKeyword;
    }
  }
  

  return (
    <div id="sectcamara" className="container-fluid">
           <form className="filterCamps">
              <input className="buscador"
                  type="search" 
                  placeholder="Search"
                  onChange={e => setFilteringKeyword(e.target.value)}
                />
              <select className="categories" onChange={e => setCategory(e.target.value)} >
                <option selected>Products Categories</option>
                <option value="Camaras">Camaras</option>
                <option value="Control de accesos">Acces Control</option>
                <option value="DVR'S">DVR</option>
              </select>
           </form>

           <div className="row">

               {
                   products.filter(searchInput(filteringKeyword)).filter(searchCategory(categorys)).map(prod =>(
                    <div className="col-6 col-md-3" key={prod.id}>
                        <Products identi={prod.id} imageplant={prod.image} imgmodal={prod.thumbnail} titulo={prod.name} descrip={prod.description} precios={prod.precio} />
                    </div>
                   ))
               }
           </div>

    </div>
  )
}

export default SectProducts