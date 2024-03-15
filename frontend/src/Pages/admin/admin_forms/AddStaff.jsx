import '../admin_forms/AddBook.css';
function AddStaff() {
    return (
            <div className='add-form-page'>
                <h1 className='m-4'>Add Staff</h1>
                <div className="add-form-container m-4">
                    <div className="form-row">
                        <div className="form-group col-md-3 my-4">
                            <label>Book ISBN</label>
                            <input type="text" className="form-control" placeholder="Unique ISBN of Book" />
                        </div>
                        <div className="form-group col-md-3 my-4">
                            <label>Book Name</label>
                            <input type="text" className="form-control" placeholder="Title of the Book" />
                        </div>
                        <div className="form-group col-md-3 my-4">
                            <label>Book Author</label>
                            <input type="text" className="form-control" placeholder="The Writer of the Book" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 my-4">
                            <label>Book Genre</label>
                            <select placeholder='Genre' className="form-control">
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
                            <input type="number" className="form-control" placeholder="Store Quantity" />
                        </div>
                    </div>

                    <div className=" form-group col-md-4 my-4">
                        <label htmlFor="formFileMultiple" className="form-label">Upload Photo of Book Cover</label>
                        <input className="form-control" accept='.jpg , .png' type="file" id="formFileMultiple" multiple />
                    </div>

                    <button className="btn btn-success mt-4">Add Book</button>
                    <button type="reset" className="btn btn-danger mt-4 mx-4">Clear Details</button>
                </div>
            </div>
    );
}

export default AddStaff;