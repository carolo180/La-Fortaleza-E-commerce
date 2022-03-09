import React from 'react'
import "./Products.css"
import { FaCartPlus } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";




const ModalProduct= (props) => {
  return (
    
    <div className="modal fade" id={props.idmodal} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

      <div className="modal-dialog">
        
        <div className="modal-content" id="conteni">
          <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">All our products have a 90-day guarantee.  <MdSecurity className='guaranteIcon'/></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        
          <div className="modal-body" id="bodym">
              <div className="pic">
                 <img src={props.imagemodal} id="imoda" />
              </div>

              <div id="descri">
              <h5 className="titleprod">{props.titumodal}</h5>
                    <p className='parradescrip'>{props.descripmodal}</p>
                    <div className='botdescrip'>
                      <h3>{props.precio}</h3>
                      <button className='addtocar'>Add To Car <FaCartPlus  className='navIcon' /></button>
                    </div>
                
              </div>
              
            
          </div>
       
        
        </div>
      </div>
 </div>
  )
}

export default ModalProduct

