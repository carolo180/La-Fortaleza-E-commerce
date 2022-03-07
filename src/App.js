import './App.css';
import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
        <ScrollToTop>
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
