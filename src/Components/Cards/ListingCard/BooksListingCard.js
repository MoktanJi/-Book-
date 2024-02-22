import React from 'react'
import  './BookListingCard.styles.css'
import B1 from '../../../Assets/B1.jpg'

const BooksListingCard = () => {
  return (
    <div>
        <div className="book-listing-card">
            <div className="book-listing-img-container">
                <img src={B1} alt="book-listing-image" className="book-listing-image"/>
            </div>
            <div className="book-listing-details-container">
                <h3>FOURTH WING</h3>
                <p className="author">REBECCA YARROS</p>
                <p className="price">Rs. 2,471.17</p>
                <a href="#" className="button">Button</a>
            </div>   
        </div>
    </div>
  )
}

export default BooksListingCard