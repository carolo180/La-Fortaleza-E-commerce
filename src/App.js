import './App.css';
import React from "react";
import {Route, Routes, useLocation, Redirect } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Cart from './pages/Carrito';
import ModalProduct from './components/sectcamaras/ModalProduct';
import { connect } from "react-redux";


function App() {

  const location = useLocation();

  return (
    <div className="App">
        <ScrollToTop>

         <Header location={location.pathname}/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/carrito" element={<Cart/>} />
            <Route exact path="/product/:id" component={ModalProduct} />
          
          </Routes>


          
        </ScrollToTop>
   
  
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App)

