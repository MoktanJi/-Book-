import React from 'react'
import './Login.styles.css'
import Auth from '../../Assets/auth.jpg'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Fonts/AuthForm/AuthForm'
import { useState } from 'react'

const Login = () => {

  const [darkMode,changeMode] = useState(false);

  const setDark = () => 
    {
      if(window.scrollY==0)
        {
          changeMode(false);
        }
      else
        {
          changeMode(true);
        }

    }
window.addEventListener('scroll',setDark);


  return (
    <React.Fragment>
        <Navbar darkTheme={true}/>
        <section className="Login-container">
            <div className="Login-img-container">
                <img src={Auth} alt="authentication"/>
            </div>
            <div className="Login-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>Login</h2>
                        <p>Signin with email and password.</p>
                        <AuthForm/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login