import React from 'react'
import './Login.styles.css'
import Auth from '../../Assets/auth.jpg'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Fonts/AuthForm/AuthForm'
import { useState } from 'react'

const Login = () => {

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
            <input type="text" name="" id="uname" />
          </div>
          
          <div className="input-field">
          <ion-icon name="key-outline"></ion-icon>
            <label htmlFor="upass">Password</label>
            <input type="password" name="" id="upass" />
          </div>

          <button onClick={""}>Login</button>
          <div className="line"><span>OR</span></div>
              <button onClick={""}>Create an Account</button>
          
            
        
        </div>



      </div>

    </>
  )
}

export default Login