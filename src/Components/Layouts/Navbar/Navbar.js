import React from 'react';
import './Navbar.styles.css';

const Navbar = () => {
  return (
    <section className="navbar-container">
       <div className="container flex justify-between align-center">
            <a href="#" className="logo">हाम्रो Book पसल </a>
            <nav className="nav-links-container">
                <a href="#" className="nav-links">Home</a>
                <a href="#" classname="nav-links">Books</a>
            </nav>
       </div>
    </section>
  )
}

export default Navbar