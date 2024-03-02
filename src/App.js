import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import BooksPage from "./Pages/BooksPage/BooksPage"
import BookDetailsPage from "./Pages/BookDetailsPage/BookDetailsPage"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp"
import Scroll from "../src/Utilities/Scroll"
import NotFound from './Pages/NotFoundPage/NotFound'
import DashMain from "./Pages/DashboardPage/DashMain"


const App = () => {
    return(
        <Scroll>
            <Routes>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/books" element = {<BooksPage/>}/>
                <Route path="/book-details/:id" element = {<BookDetailsPage/>}/>
                <Route path="/account" element={<Login/>}/>
                <Route path="/account/dashboard" element={<DashMain/>}/>
            </Routes>
        </Scroll>    
    )
}

export default App;