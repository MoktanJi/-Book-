import { json } from 'react-router';
import '../admin_forms/AddBook.css';
import { useState } from 'react';

function AddBook() {


    const [inpNAME, setNAME] = useState("");
    const [inpAUTHOR, setAUTHOR] = useState("");
    const [inpGENRE, setGENRE] = useState("");
    const [inpPOPULAR, setPOPULAR] = useState(false);
    const [inpQUANTITY, setQUANTITY] = useState("");
    const [inpPRICE, setPRICE] = useState("");
    const [inpFILE, setFILE] = useState(null);

    const handleNAME = (e) => {
        setNAME(e.target.value);
    }

    const handleAUTHOR = (e) => {
        setAUTHOR(e.target.value);
    }

    const handleGENRE = (e) => {
        setGENRE(e.target.value);
    }
    const handlePOPULAR = (e) =>
        {
            setPOPULAR(e.target.checked);
            console.log(!inpPOPULAR);
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
        setNAME("");
        setAUTHOR("");
        setGENRE("");
        setQUANTITY("");
        setPOPULAR(false);
        setPRICE("");
        setFILE(null);
    }

    const deliverDATA = async () => {
        const formData = new FormData();
        formData.append('image', inpFILE);
        let mediaRESP = await fetch("http://127.0.0.1:8000/api/addbookimage", { method: "POST", body: formData });
        let mediaPATH = await mediaRESP.json();
        console.log(mediaPATH.path);

        var data =
        {
            "b_name": inpNAME,
            "b_author": inpAUTHOR,
            "b_genre": inpGENRE,
            "b_quantity": inpQUANTITY,
            "b_price": inpPRICE,
            "b_popular": inpPOPULAR,
            "b_image": mediaPATH.path
        };
        var jsonDATA = JSON.stringify(data);

        let dataRESP = await fetch("http://127.0.0.1:8000/api/addbook", { method: "PUT", headers: { 'Content-Type': 'application/json' }, body: jsonDATA });
        let dataMSG = await dataRESP.json();
        // alert("The Book ID is = "+dataMSG.id[0].book_id);
        alert("This book ID is = " + dataMSG.data.book_id);
        clearINP();
    }

    return (
        <div className='add-form-page'>
            <h1 className='m-4'>Add Book</h1>
            <div className="add-form-container m-4">
                <div className="form-row">
                    <div className="form-group col-md-3 my-4">
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
                        <select onChange={handleGENRE} value={inpGENRE} placeholder='Genre' className="form-control">
                            <option>Choose Genre</option>
                            <option>Fiction</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Romance</option>
                            <option>Thriller</option>
                        </select>
                    </div>
                </div>
                    <input onChange={handlePOPULAR} value={inpPOPULAR} type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                    <label class="btn btn-outline-success" for="btncheck1">Popular</label>

                <div className="form-group">
                    <div className="form-group col-md-2 my-4">
                        <label htmlFor="inputEmail4">Book Quantity</label>
                        <input onChange={handleQUANTITY} value={inpQUANTITY} type="number" className="form-control" placeholder="Store Quantity" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group col-md-2 my-4">
                        <label htmlFor="inputEmail4">Book Price</label>
                        <input onChange={handlePRICE} value={inpPRICE} type="number" className="form-control" placeholder="Store Quantity" />
                    </div>
                </div>


                <div className=" form-group col-md-4 my-4">
                    <label htmlFor="formFileMultiple" className="form-label">Upload Photo of Book Cover</label>
                    <input className="form-control" onChange={handleFILE} accept='.jpg , .png' type="file" id="formFileMultiple" />
                </div>


                <button className="btn btn-success mt-4" onClick={deliverDATA}>Add Book</button>
                <button type="reset" onClick={clearINP} className="btn btn-danger mt-4 mx-4">Clear Details</button>
            </div>
        </div>
    );
}

export default AddBook;