import React from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import DetailsSection from '../../Components/Layouts/DetailsSection/DetailsSection'
import Footer from '../../Components/Layouts/Footer/Footer'
import emage from '../../Assets/B1.jpg';
import { BookData } from '../../Utils/BookData';
import { useLocation } from 'react-router-dom';

const BookDetailsPage = (Data) => {
  
  const x = useLocation();
  return (
<>
      <Navbar/>
      <DetailsSection  book_name={BookData[7].book_name} book_author={BookData[2].author_name} book_description={BookData[1].book_description} book_price={200} book_image={BookData[1].book_image}/>
      <Footer/>
      </>
  )
}

export default BookDetailsPage