import React from 'react'
import './Showcase.styles.css'
import Navbar from '../Navbar/Navbar'
import SearchInputForm from '../../Fonts/SearchInputFont/SearchInputForm'

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar/>
      <div className="overlay"></div>
        <div className="showcase-content">
            <h1>Best <span className="text-primary">Books</span> Avaliable</h1>
            <p>Buy Quality Books at Cheaper Price.</p>
       <SearchInputForm/> 
       </div>

        
    </section>
  )
}

export default Showcase