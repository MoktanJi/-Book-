import React from 'react'
import Showcase from '../../Components/Layouts/Showcase/Showcase'
import BookListing from '../../Components/Layouts/BookListing/BookListing'
import Footer from '../../Components/Layouts/Footer/Footer'

const HomePage = () => {
  return (
    <section>
        <Showcase/>
        <BookListing/>
        <Footer/>
    </section>
  )
}

export default HomePage