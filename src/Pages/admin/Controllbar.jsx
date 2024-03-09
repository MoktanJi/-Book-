import './Controllbar.css'

function Controllbar() {
    return (

        <>
            <div className="controlbar">
                
                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href='/category/fiction' className="dropdown-item">Fiction</a></li>
                                    <li><a href='' className="dropdown-item">Horror</a></li>
                                    <li><a href='' className="dropdown-item">Mystery</a></li>
                                    <li><a href='' className="dropdown-item">Romance</a></li>
                                    <li><a href='' className="dropdown-item">Thriller</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Books Archive</a></li>
                                </ul>
                            </li>

            </div>

        </>



    );
}

export default Controllbar;