import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Pages/Contact';
import Sidebar from './Pages/Sidebar';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App