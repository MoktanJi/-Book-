import notFoundCartton from '../assets/images/site_images/404 Cartoon.png'
import './NotFound.css'
function NotFound()
    {
        return (
            <div className="full-img-container">
                <img src={notFoundCartton} alt="" width='720px'/>
            </div>

        );
    }

export default NotFound;