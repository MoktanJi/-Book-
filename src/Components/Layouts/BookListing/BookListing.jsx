import React from 'react'
import './BookListing.styles.css'
import BooksListingCard from '../../Cards/ListingCard/BooksListingCard'
import { BookData } from '../../../Utils/BookData'
import Navbar from '../Navbar/Navbar';

const BookListing = () => {
  return (
    <>
      <Navbar/>
      <div className="title">Popular Books</div>
      <div className="book-card-grid">
        {
          BookData.map((dataAccesser) =>
              <BooksListingCard book_id={dataAccesser.id} book_title={dataAccesser.book_name} book_author={dataAccesser.author_name} book_image={dataAccesser.book_image} book_price={dataAccesser.cost} book_description={dataAccesser.book_description} />
          )
        }
      </div>
    </>
  )
}

export default BookListing