import React from 'react'
import './Login.styles.css'
import Auth from '../../Assets/auth.jpg'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Fonts/AuthForm/AuthForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashMain from '../DashboardPage/DashMain'

const Login = () => {

  const [uname,changeUname]=useState(null);
  const [upass,changeUpass]=useState(null);

  const navi = useNavigate();


  const handleUnameInput = (event) =>
    {
      changeUname(event.target.value);
    }

  const handleUpassInput = (event) =>
    {
      changeUpass(event.target.value);
    }



const fetchData = async () =>
  {
    let resp = await fetch(`http://127.0.0.1:8000/api/login?uname=${uname}&upass=${upass}`, {method:'POST'});
    let msg=await resp.json();
      if(msg.response_code==200)
        {
          navi('/account/dashboard');
          alert(`Welcome ${msg.data[0].staff_name}`);
        }
      else if(msg.response_code==401)
        {
          alert(`Username or Password Incorrect`);
        }
      
      else if(msg.response_code=404)
        {
          alert("User not found ! Signup & create new account");
        }
      
      
  }



  return (
    <>
      <Navbar/>
      <div className="account-container">
        <div className="account-img-container">
          <img src={Auth} alt="authentication" />
        </div>

        <div className="account-actions-contianer">
          <h1>Login/Signup</h1>

          <div className="input-field">
          <ion-icon htmlFor='uname' name="person-circle-outline"></ion-icon>
            <label htmlFor="uname">User ID</label>
            <input type="text" name="uname" id="uname" value={uname} onChange={handleUnameInput} />
          </div>
          
          <div className="input-field">
          <ion-icon name="key-outline"></ion-icon>
            <label htmlFor="upass">Password</label>
            <input type="password" name="upass" id="upass" onChange={handleUpassInput} value={upass}  />
          </div>

          <button onClick={fetchData}>Login</button>
          <div className="line"><span>OR</span></div>
              <button>Create an Account</button>
        </div>
      </div>
    </>
  )
}

export default Login