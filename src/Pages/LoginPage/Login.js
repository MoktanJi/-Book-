import React from 'react'
import './Login.styles.css'
import Auth from '../../Assets/auth.jpg'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Fonts/AuthForm/AuthForm'

const Login = () => {
  return (
    <React.Fragment>
        <Navbar darkText={true}/>
        <section className="Login-container">
            <div className="Login-img-container">
                <img src={Auth} alt="authentication"/>
            </div>
            <div className="Login-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>Login</h2>
                        <p>Signin with email and password.</p>
                        <AuthForm buttonName="Login"/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login