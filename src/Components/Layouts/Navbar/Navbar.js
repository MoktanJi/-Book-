import React from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'

const Navbar = ({ darkTheme, darkText }) => {
  return (
    <section className={ `navbar-container ${ darkTheme ? 'background-dark' : 'background-transparent' } ` }>
       <div className="container flex justify-between align-center">
            <a href="#" className="logo">हाम्रो<span className="text-primary"> Book </span> पसल </a>
            <nav className="nav-links-container">
                <Link to="/" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home</Link>
                <Link to="/books" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Books</Link>
                <Link to="/login" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Login</Link>
                <Link to="/signup" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Sign up</Link>
                
            </nav>
       </div>
    </section>
  )
}

export default Navbar