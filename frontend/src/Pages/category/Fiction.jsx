import { useState } from "react";
import { useEffect } from "react";
import { Suspense, lazy } from "react";

// import Card from "../../components/Card";
import './CardCSS.css'



import emage from '../../assets/images/book_images/01.jpg'
import emage2 from '../../assets/images/book_images/02.jpg'










const Card = lazy(() => import('../../components/Card'));

function Fiction() {


    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    const fetchDataFromApi = async () => {
        var resp = await fetch("http://127.0.0.1:8000/api/getbook", { method: "GET" });
        let respData = await resp.json();
        console.log(respData);
        setData(respData);
        setFlag(true);
    }


    useEffect(() => { fetchDataFromApi(); console.log(data.length) }, []);




    return (
        flag && <>
            <Suspense fallback={<div>Loading data</div>}>
                <div className="container">
                    <div className="card-grid mt-5">

                        {
                            data.map((i) =>
                                            <Card book_id={i.book_id} book_image={emage} book_title={i.book_name} book_author={i.book_author} book_genre={i.book_genre} book_stock={i.book_quantity} book_price={i.book_price} />
                                    )
                        }
                        {/* <Card book_id={"1"} book_image={emage} book_title={"Title"} book_author="Lekhak" book_genre="Fiction" book_stock={123} book_price={11400}/> */}



                    </div>
                </div>
            </Suspense>
        </>

    );
}

export default Fiction;