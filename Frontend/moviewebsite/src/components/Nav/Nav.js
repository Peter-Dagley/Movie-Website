import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import About from '../Pages/About/About';
import Classifications from '../Pages/Classifications/Classifications';
import Contact from '../Pages/Contact/Contact';
import DiscussionBoard from '../Pages/DiscussionBoard/DiscussionBoard';
import Home from '../Pages/Home/Home';
import ListingsGallery from '../Pages/ListingsGallery/ListingsGallery';
import Location from '../Pages/Location/Location';
import NewReleasesGallery from '../Pages/NewReleasesGallery/NewReleasesGallery';
import Screens from '../Pages/Screens/Screens';
import TicketBookings from '../Pages/TicketBookings/TicketBookings';
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
              <Link className='link' to="/listingsgallery">Listings Gallery</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/location">Location</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/newreleasesgallery">New Releases Gallery</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/classifications">Classifications</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/screens">Screens</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/discussionboard">Discussion Board</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/ticketbookings">Ticket Bookings</Link>
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
        <Route path="/listingsgallery" element={<ListingsGallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/newreleasesgallery" element={<NewReleasesGallery />} />
        <Route path="/classifications" element={<Classifications />} />
        <Route path="/screens" element={<Screens />} />
        <Route path="/discussionboard" element={<DiscussionBoard />} />
        <Route path="/ticketbookings" element={<TicketBookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  )
}

export default Nav;