import React from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import DetailsSection from '../../Components/Layouts/DetailsSection/DetailsSection'
import Footer from '../../Components/Layouts/Footer/Footer'

const BookDetailsPage = () => {
  return (
    <section>
      <Navbar darkTheme={ true }/>
      <DetailsSection/>
      <Footer/>
    </section>
  )
}

export default BookDetailsPage