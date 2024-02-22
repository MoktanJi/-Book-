import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import BooksPage from "./Pages/BooksPage/BooksPage"
import BookDetailsPage from "./Pages/BookDetailsPage/BookDetailsPage"


const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/books" element = {<BooksPage/>}/>
                <Route path="/book-details/:id" element = {<BookDetailsPage/>}/>
            </Routes>
           
        </div>
    )
}

export default App;