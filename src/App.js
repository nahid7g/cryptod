import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCryptoCurrency from "./Pages/AllCryptoCurrency/AllCryptoCurrency";
import Home from "./Pages/Home/home";
import Footer from "./Pages/Shared/Footer/Footer";
import NavbarTop from "./Pages/Shared/NavbarTop/NavbarTop";

function App() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cryptocurrency" element={<AllCryptoCurrency />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
