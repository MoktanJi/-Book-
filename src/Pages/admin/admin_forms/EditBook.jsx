import '../admin_forms/EditBook.css';
function EditBook() {
    return (
            <div className='edit-form-page'>
                <h1 className='m-4'>Edit Book</h1>
                <div className="edit-form-container m-4">
                    <div class="form-row">
                        <div class="form-group col-md-3 my-4">
                            <label>Book ISBN</label>
                            <input type="text" class="form-control" placeholder="Unique ISBN of Book" />
                        </div>
                        <div class="form-group col-md-3 my-4">
                            <label>Book Name</label>
                            <input type="text" class="form-control" placeholder="Title of the Book" />
                        </div>
                        <div class="form-group col-md-3 my-4">
                            <label>Book Author</label>
                            <input type="text" class="form-control" placeholder="The Writer of the Book" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4 my-4">
                            <label>Book Genre</label>
                            <select placeholder='Genre' class="form-control">
                                <option selected>Choose Genre</option>
                                <option>Fiction</option>
                                <option>Horror</option>
                                <option>Mystery</option>
                                <option>Romance</option>
                                <option>Thriller</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group col-md-2 my-4">
                            <label for="inputEmail4">Book Quantity</label>
                            <input type="number" class="form-control" placeholder="Store Quantity" />
                        </div>
                    </div>


                    <div class=" form-group col-md-3 my-4">
                        <label for="formFileMultiple" class="form-label">Upload Photo</label>
                        <input class="form-control" accept='.jpg , .png' type="file" id="formFileMultiple" />
                    </div>

                    <button class="btn btn-success mt-4">Add Book</button>
                    <button type="reset" class="btn btn-danger mt-4 mx-4">Clear Details</button>
                </div>
            </div>
    );
}

export default EditBook;