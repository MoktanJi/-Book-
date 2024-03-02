import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import BooksPage from "./Pages/BooksPage/BooksPage"
import BookDetailsPage from "./Pages/BookDetailsPage/BookDetailsPage"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp"
import Scroll from "../src/Utilities/Scroll"

const App = () => {
    return(
        <Scroll>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/books" element = {<BooksPage/>}/>
                <Route path="/book-details/:id" element = {<BookDetailsPage/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Scroll>    
    )
}

export default App;