import '../admin_forms/EditBook.css';
import { useState } from 'react';


function EditBook() {
    
 const [inpID, setID] = useState("");
 const [inpNAME, setNAME] = useState("");
    const [inpAUTHOR, setAUTHOR] = useState("");
    const [inpGENRE, setGENRE] = useState("");
    const [inpQUANTITY, setQUANTITY] = useState("");
    const [inpPRICE, setPRICE] = useState("");
    const [inpFILE, setFILE] = useState(null);

    
    const handleID = (e) =>
        {
            setID(e.target.value);
        }
    
    const handleNAME = (e) => {
        setNAME(e.target.value);
    }

    const handleAUTHOR = (e) => {
        setAUTHOR(e.target.value);
    }

    const handleGENRE = (e) => {
        setGENRE(e.target.value);
    }

    const handleQUANTITY = (e) => {
        setQUANTITY(e.target.value);
    }

    const handlePRICE = (e) => {
        setPRICE(e.target.value);
    }

    const handleFILE = (e) => {
        setFILE(e.target.files[0]);

    }

    const clearINP = () => {
        setID("");
        setNAME("");
        setAUTHOR("");
        setGENRE("");
        setQUANTITY("");
        setPRICE("");
        setFILE(null);
    }

    const deliverDATA = async () => {
        var data =
        {
            "b_id": inpID,
            "b_name": inpNAME,
            "b_author": inpAUTHOR,
            "b_genre": inpGENRE,
            "b_quantity": inpQUANTITY,
            "b_price": inpPRICE,
        };
        var jsonDATA = JSON.stringify(data);

        let dataRESP = await fetch("http://127.0.0.1:8000/api/editbook", { method: "PATCH", headers: { 'Content-Type': 'application/json' }, body: jsonDATA });
        let dataMSG = await dataRESP.json();
        // alert("The Book ID is = "+dataMSG.id[0].book_id);
        clearINP();
    }    
    
    return (
            <div className='edit-form-page'>
                <h1 className='m-4'>Edit Book</h1>
                <div className="edit-form-container m-4">
                    <div className="form-row">
                        <div className="form-group col-md-3 my-4">
                            <label>Book ID</label>
                            <input type="text" value={inpID} onChange={handleID} className="form-control" placeholder="Unique ID of Book" />
                        </div>

                        <div className="form-group col-md-3 my-4">0
                            <label>Book Name</label>
                            <input type="text" value={inpNAME} onChange={handleNAME} className="form-control" placeholder="Title of the Book" />
                        </div>

                        <div className="form-group col-md-3 my-4">
                            <label>Book Author</label>
                            <input type="text" value={inpAUTHOR} onChange={handleAUTHOR} className="form-control" placeholder="The Writer of the Book" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 my-4">
                            <label>Book Genre</label>
                            <select value={inpGENRE} onChange={handleGENRE} placeholder='Genre' className="form-control">
                                <option>Choose Genre</option>
                                <option>Fiction</option>
                                <option>Horror</option>
                                <option>Mystery</option>
                                <option>Romance</option>
                                <option>Thriller</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-2 my-4">
                            <label htmlFor="inputEmail4">Book Quantity</label>
                            <input type="number" value={inpQUANTITY} onChange={handleQUANTITY} className="form-control" placeholder="Store Quantity" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-2 my-4">
                            <label htmlFor="inputEmail4">Book Price</label>
                            <input type="number" value={inpPRICE} onChange={handlePRICE} className="form-control" placeholder="Price per piece" />
                        </div>
                    </div>

                    <button onClick={deliverDATA} className="btn btn-warning mt-4">Edit Details</button>
                    <button onClick={clearINP} type="reset" className="btn btn-danger mt-4 mx-4">Clear Details</button>
                </div>
            </div>
    );
}

export default EditBook;