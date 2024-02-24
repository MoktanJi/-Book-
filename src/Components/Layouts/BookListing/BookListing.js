import React from 'react'
import './BookListing.styles.css'
import BooksListingCard from '../../Cards/ListingCard/BooksListingCard'
import { BookData } from '../../../Utils/BookData'

const BookListing = () => {
  return (
    <div className="book-listing-container">
        <div className="container">
            <h2>Some <span className="text-primary">Books</span> That You Might Like</h2> 
            <div className="listing-container">
              {BookData.slice(0,4).map((book) => (
                <BooksListingCard Data={book}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default BookListing