import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Notfound from './pages/Notfound';
import Navbar1 from "./components/Navbar1";
export default function App() {
  return (
    <div>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Notfound />} />



      </Routes>
    </div>
  )
}
