import React from 'react'
import './BookListingAll.styles.css'
import BookListingCard from '../../Cards/ListingCard/BooksListingCard'
import { BookData } from '../../../Utils/BookData'  

const BookListingAll = () => {
  return (
<>
                    {
                      BookData.map((book)=><BookListingCard book_title={"Hello"}/>)
                    }
</>
  )
}

export default BookListingAll