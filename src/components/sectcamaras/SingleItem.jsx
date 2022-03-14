import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { toast } from "react-toastify"

const SingleItem = ({  currentItem, addToCart }) => {

  const addCartNotification2 =()=>{
    toast.success("New product added to your cart",{
        type:"success",
        theme:"colored",
       })
    
}
  return (
    <div class="outside">
        <div class="modal-dialog">
          <div class="modal-content">
          <h5 class="modal-title">All our products have a 90-day guarantee  <MdSecurity className='guaranteIcon'/></h5>
            <div class="modal-header">
              <h5 class="modal-title2">{currentItem.name}</h5>
              <NavLink to={`/tienda`}>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </NavLink>
            </div>
            <div className="modal-body" id="bodym">
                    <div className="pic">
                    <div> <img src={currentItem.image} className="imoda"/></div>
                    </div>
                
              <div id="descri">
                <p className="parradescrip">{currentItem.description}</p>
                <p className="costo">$ { currentItem.precio.toFixed(3)}</p>
                <div class="modal-footer">
                    <button className="addtocar" onClick={()=>{addToCart( currentItem.id);  addCartNotification2()}}>Add To Cart <FaCartPlus/></button>
                   
                    <NavLink to={"/carrito"}>
                    <button type="button" class="goescart">Go To Cart <IoMdArrowDropright className="icongoes"/></button>
                    </NavLink > 
              </div>
              </div>
          
          
          
            </div>
          
          
          </div>
        </div>
      </div>
 
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);

