import './Card.css'
import emage from '../assets/images/book_images/01.jpg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Card(Data) {
var id = useParams();
    return (
        <>
            <div className="card-container">
                <div className="card" styles="width: 15rem;">
                    {/* <Link to='/book-details/:id'><img src={Data.book_image} className="card-img-top" alt="..." /></Link> */}
                    <img src={Data.book_image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{Data.book_title}</h4>
                        <div className="book-details">Book ID: {Data.book_id}</div>
                        <div className="book-details">Author: {Data.book_author}</div>
                        <div className="book-details">Genre: {Data.book_genre}</div>
                        <div className="book-details">In Stock : {Data.book_stock}</div>
                        <div className="book-details"><h4>Price : रू  {Data.book_price}</h4></div>
                        <button className="btn btn-primary my-2">Add to Cart</button>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Card;