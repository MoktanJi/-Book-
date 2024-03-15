import '../admin_forms/DeleteBook.css';
function DeleteBook() {
    return (
            <div className='delete-form-page'>
                <h1 className='m-4'>Delete Book</h1>
                <div className="search-form-container m-4">

                    <div className="row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Book ISBN or Book Name"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-danger">Delete Book</button>
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default DeleteBook;