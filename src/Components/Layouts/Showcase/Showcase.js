import React from 'react'
import './Showcase.styles.css'
import Navbar from '../Navbar/Navbar'

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar/>
      <div className="overlay"></div>
        <div className="showcase-content">
            <h1>Best Books Avaliable</h1>
            <p>Buy Quality Books at Cheaper Price.</p>
        </div>
    </section>
  )
}

export default Showcase