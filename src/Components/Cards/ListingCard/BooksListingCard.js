import React from 'react'
import  './BookListingCard.styles.css'
import { Link } from 'react-router-dom'

const BooksListingCard = ({ Data }) => {
  return (
        <div className="book-listing-card">
            <div className="book-listing-img-container">
                <img src={Data.book_image} alt="book-listing-image" className="book-listing-image"/>
            </div>
            <div className="book-listing-details-container">
                <h3>{Data.book_name}</h3>
                <p className="author">{Data.author_name}</p>
                <p className='price'>{Data.cost}</p>
                
            </div> 
            <div className="card-btn-container">
                <Link to={`/book-details/${ Data.id }`} className="button">Add To Cart</Link>  
            </div>  
        </div>
    
  )
}

export default BooksListingCard