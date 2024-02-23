import React from 'react'
import './DetailsSection.styles.css'
import B1 from '../../../Assets/B1.jpg'

const DetailsSection = () => {
  return (
    <section className="detail-section-container">
       <div className="container">
            <div className="flex-container">
                <div className="book-img-container">
                    <img src={B1} alt="image"/>
                </div>
                <div className="book-details-container">
                    <h2>FOURTH WING</h2>
                    <p className="text-primary">REBECCA YARROS</p>
                    <p className="book-description">Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.</p>
                    <p><b>Langauge</b>: English</p>

                    <h3>Rs. 2,471.17</h3>

                    <a href="#" className="cart-button">Add To Cart</a>
                </div>
            </div>
       </div>

    </section>
  )
}

export default DetailsSection