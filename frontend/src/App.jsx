import logo from './logo.svg';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';


// Components
import Navbar from './components/Navbar';
import Card from './components/Card';
import AlertBox from './components/AlertBox';



//Pages
import Login from './Pages/Login';
import Home from './Pages/Home';


import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.js';
import NotFound from './Pages/NotFound';
import Fiction from './Pages/category/Category';


// Admin Pages
import Controllbar from './Pages/admin/admin_components/admin_sidebar/Controllbar'
import AddForm from "./Pages/admin/admin_forms/AddBook"
import AdminPanel from './Pages/admin/AdminPanel';
import Category from './Pages/category/Category';




function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          {/* <Card/> */}
          {/* <AlertBox></AlertBox> */}
          <Routes>
            {/* <Route path='*' element={<NotFound/>}></Route> */}
            <Route path='/*' element={<NotFound/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            
            <Route path='/genre/fiction' element={<Category genre='fiction'/>}></Route>
            <Route path='/genre/horror' element={<Category genre='horror'/>}></Route>
            <Route path='/genre/mystery' element={<Category genre='mystery'/>}></Route>
            <Route path='/genre/romance' element={<Category genre='romance'/>}></Route>
            <Route path='/genre/thriller' element={<Category genre='thriller'/>}></Route>
            
            <Route path='/account' element={<Login/>}></Route>
            
            <Route path='/admin/' element={<AdminPanel/>}></Route>
            <Route path='/admin/addbook' element={<AddForm/>}></Route>
            <Route path='/admin/dashboard' element={<Controllbar/>}></Route>
          
          </Routes>
        
        
        </BrowserRouter>

    </>
  );
}

export default App;
