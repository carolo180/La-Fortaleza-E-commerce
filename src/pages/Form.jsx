import React, { useState, useEffect } from "react";
import "./Form.css"
import { connect } from "react-redux";
import Header2 from "../components/header2/Header2"
import { RiWhatsappFill } from "react-icons/ri";

const Form = ({cart, Price}) => {
  const initialStateValues = {
    names:"",
    mail:"",
    phone:"",
    msn: "",
  };

     //info numero de productos en el nav
  const [cartCount, setCartCount] = useState(0)
  const [totalPrices, setTotalPrices] = useState(0);
  const [values, setValues] = useState("");

    

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const goToWhatsapp = e =>{
    setValues({...initialStateValues})
     console.log(values)

     let named = values.nombre
     let mails = values.mail
     let phones = values.phone
     let message = values.msn
     
     
     let mapeo = cart.map((dat) => {
      let producto=""
      return( producto = "%0a" + " * " +(dat.qty)+" "+ " Units of " +(dat.name)+", "+ " with a single subtotal price of " + "$"+(dat.precio*dat.qty).toFixed(3))
     }) 
  
     var url = "https://wa.me/573044531854?text="+
     "Hi i am " + named + ","+ "%0a"
     + " My email is " + mails + ","+" %0a"
     + " My contact number is " + phones + ","+"%0a"
     + "I would like to order the next products:"+ mapeo+  "%0a"  + "With a total purchase of $: " + totalPrices.toFixed(3) +"."+ "%0a" 
     + message + "."
     
     window.open(url, '_blank').focus();
  };


  useEffect(()=>{
    let count = 0;
    let totalprice = 0;
 
      cart.forEach((item) => {
     
      count += item.qty;
      item.precio=parseFloat(item.precio);
      totalprice += item.qty * item.precio;
     
    });

     setCartCount(count);
     setTotalPrices(totalprice);
      
   
 },[cart, cartCount, totalPrices, setTotalPrices,cartCount, setCartCount])

 
  return (
    <>
       <Header2 />
       <div className="form">
       <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="carroinfo">Your cart products</span>
          <span class="badge rounded-pill">{cartCount}</span>
        </h4>
        <ul class="list-group mb-3">

        {cart.map((item) => (
                 <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                   <h6 class="my-0">
                    {item.name}
                   </h6>
                   <small class="text-muted">{item.qty} Units</small>
                 </div>
                 <span class="text-muted">${(item.precio*item.qty).toFixed(3)}</span>
               </li>
            ))}
        
    
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (COP)</span>
            <strong>$ {totalPrices.toFixed(3)}</strong>
          </li>
        </ul>

       
      </div>
       <form id="formu_contacto" action="" className="form-box"  autocomplete="off" onSubmit={e => { e.preventDefault(); goToWhatsapp(); }}>
					
                    <div className="mahi_holder">
                        <div className="container">
                              <div className="row bg_1">
                                <div className="titnormal">
                                    <h1 className="titleform"> Checkout form </h1>
                                </div> 
    
                                   <div id="campoNom" className="col-3 input-effect">
                                      <input className="effect-16" 
                                      type="text" 
                                      placeholder="Full Names" 
                                      required="required" 
                                      name="nombre" 
                                      id="nombre" 
                                      onChange={handleInputChange}
                                      value={values.names}/>
                                    <span className="focus-border"/>
                                    <div className="feedback"></div>
                                   </div>
    
    
                                <div id="campoApe" className="col-3 input-effect">
                                <input className="effect-16"
                                       placeholder="Email" 
                                       required="required" 
                                       name="mail" 
                                       id="mail"
                                       onChange={handleInputChange}
                                       value={values.mail}/>
                                      <span className="focus-border"/>
                                </div> 
    
    
                                    <div id="campoCorreo" className="col-3 input-effect">
                                      <input className="effect-16" 
                                       type="number"
                                        placeholder="Contact Number"
                                         required="required" 
                                         name="phone" 
                                         id="phone"
                                         onChange={handleInputChange}
                                         value={values.phone}/>
                                        
                                    <span className="focus-border"/>
    
                                </div>
            
                                <div id="campoCelu" className="col-3 input-effect">
                                      <input className="effect-16"
                                       type="text"
                                        placeholder="Write Your Message" 
                                        required="required" 
                                        name="msn"
                                         id="msn"
                                         onChange={handleInputChange}
                                         value={values.msn}
                                         />
                              <span className="focus-border"/>
                                </div>
      
                                  <div id="boton_enviar" className="suscribirse">
                                    <button  type="submit">Send Information <RiWhatsappFill className="iconwhats"/></button>
                                </div>	
                            </div>
                        </div>
                    </div>
                </form>	

       </div>
      
    </>
  )
}
const mapStateToPropsNav3 = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

  export default connect(mapStateToPropsNav3)(Form);