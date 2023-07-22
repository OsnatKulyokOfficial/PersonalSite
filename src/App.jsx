import React from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechNavigation from "./component/sections/Tech.jsx";
import Teaching from "./component/sections/Teaching";
import Products from "./component/pages/Products";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer" element={<TechNavigation />} />
          <Route path="/products" element={<Products />} />
          <Route path="/computer/advance%teaching" element={<Teaching />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
