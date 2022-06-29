import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import './NavStyles.css';


const Nav = () => {
  return (
    <Router>
      
      <div className="App">
        <nav>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/">Home</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/about">About</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/contact">Contact</Link>
            </button>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  )
}

export default Nav;