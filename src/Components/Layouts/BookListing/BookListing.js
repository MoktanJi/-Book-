import React from 'react'
import './BookListing.styles.css'
import BooksListingCard from '../../Cards/ListingCard/BooksListingCard'


const BookListing = () => {
  return (
    <div className="book-listing-container">
        <div className="container">
            <h2>Some <span className="text-primary">Books</span> That You Might Like</h2> 
            <div className="book-listing-container">
                <BooksListingCard/>
                <BooksListingCard/>
                <BooksListingCard/>
                <BooksListingCard/>
            </div>
        </div>
    </div>
  )
}

export default BookListing