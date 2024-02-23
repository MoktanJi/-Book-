import React from 'react'
import './Navbar.styles.css'

const Navbar = ({ darkTheme }) => {
  return (
    <section className={ `navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' } ` }>
       <div className="container flex justify-between align-center">
            <a href="#" className="logo">हाम्रो<span className="text-primary"> Book </span> पसल </a>
            <nav className="nav-links-container">
                <a href="#" className="nav-links">Home</a>
                <a href="#" className="nav-links">Books</a>
            </nav>
       </div>
    </section>
  )
}

export default Navbar