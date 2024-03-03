import React, { useState, useEffect } from 'react'
import './DetailsSection.styles.css'
import { useParams } from 'react-router-dom'
import { BookData } from '../../../Utils/BookData'

const DetailsSection = () => {
  const { id } = useParams();
  const [Data, setBookData] = useState({});

  
  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0])
  },[])
  return (
    <section className="detail-section-container">
       <div className="container">
            <div className="flex-container">
                <div className="book-img-container">
                    <img src={Data.book_image} alt="image"/>
                </div>
                <div className="book-details-container">
                    <h2>{Data.book_name}</h2>
                    <p className="text-primary">{Data.author_name}</p>
                    <p className="book-description">{Data.book_description}</p>
                    <p><b>Language</b>: {Data.language}</p>
                    <h3>{Data.cost}</h3>

                    <a href="#" className="button-primary">Add To Cart</a>
                </div>
            </div>
       </div>

    </section>
  )
}

export default DetailsSection