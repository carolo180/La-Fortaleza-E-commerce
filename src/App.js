import './App.css';
import React from "react";
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Carrito from './pages/Carrito';
import SingleItem from './components/sectcamaras/SingleItem';
import SingleItemBest from './components/bestseller/SingleItemBest';
import Form from "./pages/Form"
import {Route, Routes, useLocation, Redirect } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";



function App({current}) {

  const location = useLocation();

  return (
    <div className="App">
        <ScrollToTop>

        {location.pathname !== "/formulario" && location.pathname !== "/carrito"  && <Header />}

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/product/:id" element={<SingleItem/>} />
            <Route path="/bestseller/:id" element={<SingleItemBest/>} />
            <Route path="/formulario" element={<Form/>} />
           
          </Routes>
       
          {location.pathname === "/" && <Footer />}
        </ScrollToTop>
   
     <ToastContainer autoClose={1000} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App)

