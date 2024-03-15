import '../admin_forms/SearchBook.css';
function SearchBook() {
    return (
        <section id='searchbook'>
            <div className='search-form-page'>
                <h1 className='m-4'>Search Book</h1>
                <div className="search-form-container m-4">

                    <div className="row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Book ISBN or Book Name"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary">Search Book</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SearchBook;