import React from "react";
import cartoon404 from '../../Assets/404 Cartoon.png'
import './NotFound.css'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
function NotFound()
    {
        return (
            <>
                <Navbar/>
                <div className="main-container">
                <img src={cartoon404} alt="" width="720px" />
                </div>
            </>

        );
    }

export default NotFound;