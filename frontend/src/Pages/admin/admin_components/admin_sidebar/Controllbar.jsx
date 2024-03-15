import './Controllbar.css'

import AddBook from '../../admin_forms/AddBook';

import userImg from '../../../../assets/images/staff_images/2.png';

import { Link } from 'react-router-dom'


function Controllbar(userData) {
    return (

        <>
            <div className="admin-main">
                <aside className="sidebar">
                    <div className="profile_info" >
                        <div className="profile_picture"><img src={userData.user_image} alt="" /></div>
                        <div className="profile_user">
                            <span className='username'>{userData.user_name}</span>
                            <span className='userdesignation'>{userData.user_designation}</span>
                        </div>
                    </div>
                    <hr className="border border border-1 opacity-100" />
                    <div className="sidebar-link-container">
                        <div className='section-title'>Book Section</div>
                        <a href='#addbook'><li><ion-icon name="book-outline"/>Add Book</li></a>
                        <a href='#editbook'><li><ion-icon name="book-outline"/>Edit Book</li></a>
                        <a href='#searchbook'><li><ion-icon name="book-outline"/>Search Book</li></a>
                        <a href='#deletebook'><li><ion-icon name="book-outline"/>Delete Book</li></a>
                        <div className='section-title'>Staff Section</div>
                        <a href='#addstaff'><li><ion-icon name="book-outline"/>Add Staff</li></a>
                        <a href='#editstaff'><li><ion-icon name="book-outline"/>Edit Staff</li></a>
                        <a href='#deletestaff'><li><ion-icon name="book-outline"/>Remove Staff</li></a>
                        <div className='section-title'>Sales Section</div>
                        <a href='#'><li><ion-icon name="book-outline"/><span className="badge text-bg-success">15</span>Pending Orders</li></a>
                    </div>
                </aside>
                <div className="admin-content">

                    {/* <AddForm /> */}
                </div>


            </div>









        </>

    );
}

export default Controllbar;