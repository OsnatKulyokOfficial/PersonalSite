import React from 'react'
import Navbar from './component/Navbar'
import './App.css'
import Home from './component/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './component/pages/Services'
import Products from './component/pages/Products'
import SignUp from './component/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
