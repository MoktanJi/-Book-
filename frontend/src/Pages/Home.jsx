import React from "react";
import './Home.css';

import HorizontalHomeCard from './category/HorizontalHomeCard'
import Footer from './category/Footer'

function Home() {
    return (
        <>
            <div className="background">
                <div className="search-contaianer">
                    <h1 className="mb-2">Best Books Avaliable</h1>
                    <h4 className="mb-5">Buy Quality Books at Cheaper Price.</h4>
                </div>

            </div>
                <HorizontalHomeCard/>
                <Footer/>
        </>
    );
}

export default Home;