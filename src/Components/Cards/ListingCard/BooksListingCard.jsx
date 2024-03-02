import React from 'react'
import './BookListingCard.styles.css'
import { Link } from 'react-router-dom'
import DetailsSection from '../../Layouts/DetailsSection/DetailsSection'

const BooksListingCard = ( Data ) => {

  return (
    <>
      <div className="card-grid">
        <div className="card-container"> 
          <div className="card-img-container">
            <Link to={'/book-details/'+Data.book_id}><img src={Data.book_image} alt="" /></Link>
          </div>

          <div className="book-det-container">
            <h1 className='text-overflow-controller'>{Data.book_title}</h1>
            <h4 className='text-overflow-controller'>Author: {Data.book_author}</h4>
            <h4 className='text-overflow-controller'>Description: {Data.book_description}</h4>
            <h3 className='text-overflow-controller'>Price: {Data.book_price}</h3>
          </div>

          <div className="card-action-btn">
            <button onClick={()=> {console.log(JSON.stringify(Data))}}>Add to Cart</button>
          </div>
          
        </div>
      </div>

    </>

  )
}

export default BooksListingCard