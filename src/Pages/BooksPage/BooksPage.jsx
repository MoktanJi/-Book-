import React from 'react'
import './BooksPage.styles.css'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import SearchInputForm from '../../Components/Fonts/SearchInputForm/SearchInputForm'
import BookListingAll from '../../Components/Layouts/BookListingAll/BookListingAll'
import Footer from '../../Components/Layouts/Footer/Footer'
import { useState } from 'react'
import { BookData } from '../../Utils/BookData'
import BookListingCard from '../../Components/Cards/ListingCard/BooksListingCard'





const BooksPage = () => {

  return (
    <>
      <div className="books-section">
      <Navbar />
      <div className="search-container">

        <h2>Find The <span className="text-primary">Books</span> That You Want.</h2>
        <SearchInputForm />
      </div>
          <div className="books-card-holder">
            {
              BookData.map((BD) =>
                <BookListingCard book_id={BD.id} book_title={BD.book_name} book_author={BD.author_name} book_description={BD.book_description} book_price={BD.cost} book_image={BD.book_image} />)
            }
      
          </div>
      
      </div>
        <Footer />
      





      </>
      )
}

      export default BooksPage