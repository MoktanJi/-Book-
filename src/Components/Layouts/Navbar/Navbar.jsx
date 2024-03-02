import React from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (pageLocation) => {
  
  const [navbarClassName, changeNavbar] = useState("navbar-container");
  
  window.addEventListener('scroll',scrollDetected);
  window.addEventListener('mouseup',scrollDetected);  

  function scrollDetected()
    {
      if(document.location.pathname=='/')
        {
            if(window.scrollY==0)
                {
                  changeNavbar("navbar-container navbar-container-unscrolled");
                }
            else if(window.scrollY>10)
              {
                changeNavbar("navbar-container");
              }
        }
      else
        {
                  changeNavbar("navbar-container");
        }
            
    }

  
  return (
    <div className={navbarClassName}>
            <div className="logo">
              <Link to='/'>हाम्रो<span className="text-primary"> Book </span> पसल </Link>
            </div>
            
            <div className="nav-link-container">
                  <Link to="/" className=''>Home</Link>
                  <Link to="/books" className=''>Books</Link>
                  <Link to="/login" className=''>Login</Link>
                  <Link to="/signup" className=''>Sign up</Link>
            </div>
       </div>
  )
}

export default Navbar