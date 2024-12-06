import { useState } from "react";
import "./index.css";
import assets from "./assets/img/assets";
import { Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebdevDetails from "./pages/WebdevDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevdetails" element={<WebdevDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
