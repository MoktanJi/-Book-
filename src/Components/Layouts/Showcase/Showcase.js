import React from 'react'
import './Showcase.styles.css'
import Navbar from '../Navbar/Navbar'
import SearchInputForm from '../../Fonts/SearchInputForm/SearchInputForm'
import { useState } from 'react'

const Showcase = () => {
  const [darkMode,changeMode] = useState(false);

  const setDark = () => 
    {
      if(window.scrollY==0)
        {
          changeMode(false);
        }
      else
        {
          changeMode(true);
        }

    }
window.addEventListener('scroll',setDark);
   







  return (
    <section className="showcase-container">
      <Navbar darkTheme={ darkMode }/>
      <div className="overlay"></div>
        <div className="showcase-content">
            <h1>Best <span className="text-primary">Books</span> Avaliable</h1>
            <p>Buy Quality Books at Cheaper Price.</p>
       <SearchInputForm darkTheme={true}/> 
       </div>

        
    </section>
  )
}

export default Showcase