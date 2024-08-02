import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';

const App = () => {
  
  return (
    <div>
    <Router>
      
       <Routes>
        
         <Route path="/" element={<Home/>} />
         <Route path="/Courses" element={<Courses/>} />
         <Route path="/AboutUs" element={<AboutUs/>} />
         <Route path="/Contactus" element={<Contactus/>} />
       </Routes>
       
    </Router>
        
    </div>
  )
}

export default App