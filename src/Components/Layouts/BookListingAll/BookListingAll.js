import React from 'react'
import './BookListingAll.styles.css'
import BookListingCard from '../../Cards/ListingCard/BooksListingCard'

const BookListingAll = () => {
  return (
    <section className="book-listing-all-container">
        <div className="container">
            <div className="grid-container">
                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>

                <div className="grid-item">
                    <BookListingCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookListingAll