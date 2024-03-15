import Controllbar from "./admin_components/admin_sidebar/Controllbar";

import './AdminPanel.css'
import userImg from '../../assets/images/staff_images/2.png';
import { useParams } from "react-router";


import AddBook from "./admin_forms/AddBook";
import EditBook from "./admin_forms/EditBook";
import SearchBook from "./admin_forms/SearchBook";
import DeleteBook from "./admin_forms/DeleteBook";

import AddStaff from './admin_forms/AddStaff'
import EditStaff from './admin_forms/EditStaff'
import DeleteStaff from "./admin_forms/DeleteStaff";

function AdminPanel(UserData) {
    const navlink = useParams();
    return (
        <>
            <div className="admin-panel">
                <div className="admin-controller">
                    {/* <Controllbar navlink='' user_image={userImg} user_name="Umang Shrestha" user_designation='C.T.O & Co-Founder' /> */}
                    <Controllbar navlink='' user_image={userImg} user_name="Umang Shrestha" user_designation='C.T.O & Co-Founder' />
                </div>
                <div className="admin-action-container">
                        <section id="addbook"><AddBook /></section>
                        <section id="editbook"><EditBook /></section>
                        <section id="searchbook"><SearchBook/></section>
                        <section id="deletebook"><DeleteBook/></section>

                        <section id="addstaff"><AddStaff/></section>
                        <section id="editstaff"><EditStaff/></section>
                        <section id="deletestaff"><DeleteStaff/></section>
                </div>
            </div>


        </>
    );
}

export default AdminPanel;