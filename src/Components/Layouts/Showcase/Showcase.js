import React from 'react'
import './Showcase.styles.css'
import Navbar from '../Navbar/Navbar'
import SearchInputForm from '../../Fonts/SearchInputForm/SearchInputForm'

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar darkTheme={ false }/>
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