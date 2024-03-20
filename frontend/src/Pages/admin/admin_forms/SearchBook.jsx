import '../admin_forms/SearchBook.css';
import { useState } from "react";

function SearchBook() {

 const [inpNAME, setNAME] = useState(null);
 const [dataFLAG,setFLAG] = useState(false);

 const [tableHider,setHider] = useState("d-none");

 const [dbDATA,setDATA] = useState(null);

    
    const handleNAME = (e) => {
        setNAME(e.target.value);
    }



    const deliverDATA = async () => {
        var data =
        {
            "b_name": inpNAME,
        };
        var jsonDATA = JSON.stringify(data);

        let dataRESP = await fetch("http://127.0.0.1:8000/api/searchbook?", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: jsonDATA });
        var dataMSG = await dataRESP.json();
        setDATA(dataMSG);
        setHider("null");
        console.log(dbDATA);
        setFLAG(true);
    }    
    return (
        <section id='searchbook'>
            <div className='search-form-page'>
                <h1 className='m-4'>Search Book</h1>
                <div className="search-form-container m-4">

                    <div className="row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" onChange={handleNAME} className="form-control" id="inlineFormInputGroupUsername" placeholder="Book Book Name"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <button onClick={deliverDATA} className="btn btn-primary">Search Book</button>
                        </div>
                    </div>
                </div>
<table className={`table table-bordered ${tableHider}`} data-bs-theme="dark">
  <thead>
    <tr>
      <th scope="col">Book ID</th>
      <th scope="col">Book Name</th>
      <th scope="col">Book Author</th>
      <th scope="col">Book Genre</th>
      <th scope="col">Book Quantity</th>
      <th scope="col">Book Price</th>
      <th scope="col">Book Image</th>
    </tr>
  </thead>
  <tbody>
      {
      dataFLAG &&
        dbDATA.map((i) =>
                <>
                    <tr>
                    <th scope="row">{i.book_id}</th>
                    <td>{i.book_name}</td>
                    <td>{i.book_author}</td>
                    <td>{i.book_genre}</td>
                    <td>{i.book_quantity}</td>
                    <td>{i.book_price}</td>
                    <td><img height="150px" src={i.book_image} alt="" /></td>
                    </tr>
                </>
        )
      }
  </tbody>
</table>
            </div>
            
        </section>
    );
}

export default SearchBook;