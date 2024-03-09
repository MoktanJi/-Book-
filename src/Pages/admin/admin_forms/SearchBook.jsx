import '../admin_forms/SearchBook.css';
function SearchBook() {
    return (
        <section id='searchbook'>
            <div className='search-form-page'>
                <h1 className='m-4'>Search Book</h1>
                <div className="search-form-container m-4">

                    <form class="row row-cols-lg-auto g-3 align-items-center">
                        <div class="col-12">
                            <div class="input-group">
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Book ISBN or Book Name"/>
                            </div>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Search Book</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default SearchBook;