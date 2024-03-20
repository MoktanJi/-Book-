import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css'

function Navbar() {

    const [currPage, changeCurrPage] = useState(0);



    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">हाम्राे Book पसल</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href='/genre/fiction' className="dropdown-item">Fiction</a></li>
                                    <li><a href='/genre/horror' className="dropdown-item">Horror</a></li>
                                    <li><a href='/genre/mystery' className="dropdown-item">Mystery</a></li>
                                    <li><a href='/genre/romance' className="dropdown-item">Romance</a></li>
                                    <li><a href='/genre/thriller' className="dropdown-item">Thriller</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Books Archive</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/account' className="nav-link" href="#">Account</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                        
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                            
                        </form>
                    </div>
                </div>
            </nav>



        </>


    );
}

export default Navbar;