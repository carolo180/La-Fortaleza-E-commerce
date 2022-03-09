import './App.css';
import React from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"


function App() {

  const location = useLocation();

  return (
    <div className="App">
        <ScrollToTop>

         <Header location={location.pathname}/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tienda" element={<Tienda/>} />
          </Routes>

          <Footer />
          
        </ScrollToTop>
   
  
    </div>
  );
}

export default App;
