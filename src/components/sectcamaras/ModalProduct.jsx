import React from 'react'
import "./Products.css"
import { FaCartPlus } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { connect } from 'react-redux';
import { addToCart } from "../../redux/Shopping/shopping-actions";




const ModalProduct= ({id, imagemodal, titumodal, descripmodal, precio, addToCart})=> {
  return (
    
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

      <div className="modal-dialog">
        
        <div className="modal-content" id="conteni">
          <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">All our products have a 90-day guarantee.  <MdSecurity className='guaranteIcon'/></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        
          <div className="modal-body" id="bodym">
              <div className="pic">
                 <img src={imagemodal} id="imoda" />
              </div>

              <div id="descri">
              <h5 className="titleprod">{titumodal}</h5>
                    <p className='parradescrip'>{descripmodal}</p>
                    <div className='botdescrip'>
                      <h3>{precio}</h3>
                   
                      <button id="botonprod"  onClick={() => addToCart(id)}>Add To Cart</button>
                    </div>
                
              </div>
              
            
          </div>
       
        
        </div>
      </div>
 </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps) (ModalProduct);

