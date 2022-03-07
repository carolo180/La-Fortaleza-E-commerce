import React from 'react'
import "./ubication.css"
import { MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";



const Ubication = () => {
  return (
    <div className='Ubication'>
       <div className='blakhole2'>Ubication</div>
        <div className='ubication'>
      
        <div className="infoubication">

                 <h3 className='titleubica'>¿Do you want to visit us?</h3>
                <div className='place'>
                   <h6 className='direcc'> <MdPlace /> Dirección:</h6>
                    <p className="pardire">Carrera 10 # 21-30 Bogotá D.C, Cundinamarca</p>
                </div>
                <div className='place'>
                    <h6 className='direcc'><BsFillTelephoneFill /> Telefono:</h6>
                    <p className="pardire">318 3037748 - 322 9071978</p>
                </div>
                <div className='place'>
                    <h6 className='direcc'><HiMail /> Email:</h6>
                    <p className="pardire">Yinirol0616@hotmail.es</p>
                </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.919235044289!2d-74.07494258523803!3d4.608478896652112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f999f165089c1%3A0xb135f125579f9e8!2zQ3JhLiAxMCAjIyMjMjEtMzAsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1646235910157!5m2!1ses!2sco"></iframe>

    </div>
    </div>
   
  )
}

export default Ubication