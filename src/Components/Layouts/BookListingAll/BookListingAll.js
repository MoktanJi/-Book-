import React from 'react'
import './BookListingAll.styles.css'
import BookListingCard from '../../Cards/ListingCard/BooksListingCard'
import { BookData } from '../../../Utils/BookData'  

const BookListingAll = () => {
    console.log(BookData)
  return (
    <section className="book-listing-all-container">
        <div className="container">

            <div className="grid-container">
                    {BookData.map((book)=>{
                        return (
                            <div className="grid-item">
                               <BookListingCard Data={book}/>
                            </div> 
                        )
                    })}

            </div>
        </div>
    </section>
  )
}

export default BookListingAll