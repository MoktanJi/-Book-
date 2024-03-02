import React from 'react'
import './Showcase.styles.css'
import Navbar from '../Navbar/Navbar'
import SearchInputForm from '../../Fonts/SearchInputForm/SearchInputForm'
import { useState } from 'react'

const Showcase = () => {
  const [darkMode, changeMode] = useState(false);

  return (
    <>
    <div className="showcase-container">
      <Navbar/>
        <div className="showcase-content">
          <h1>Best <span className="text-primary">Books</span> Avaliable</h1>
          <p>Buy Quality Books at Cheaper Price.</p>
          <SearchInputForm />
        </div>


    </div>
    </>
  )
}

export default Showcase