import React from "react";
import Card from '../../components/Card'
import { useState,useEffect } from "react";

import './HorizontalHomeCard.css';
import emage from '../../assets/images/book_images/02.jpg'

function HorizontalHomeCard()
    {

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    const fetchDataFromApi = async () => {
        var resp = await fetch(`http://127.0.0.1:8000/api/getPopular`, { method: "GET" });
        let respData = await resp.json();
        setData(respData);
        console.log(respData);
        setFlag(true);
    }

useEffect(() => {fetchDataFromApi()}, []);
    return (
        <>
        <div className="card-holder m-4">
        <h1>Popular Books</h1>
                <div className="cards">
                {
                    data.map( (i) =>
                        <>
                            <Card book_title={i.book_name} book_id={i.book_id} book_author={i.book_author} book_stock={i.book_quantity} book_genre={i.book_genre} book_price={i.book_price} book_image={i.book_image}/>
                        </>
                    )
                
                }
            </div>
        </div>
        
        
        
        
        </>



    );

    }
export default HorizontalHomeCard;