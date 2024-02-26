import React from 'react'
import './SignUp.styles.css'
import Auth from '../../Assets/auth.jpg'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Fonts/AuthForm/AuthForm'


const SignUp = () => {
  return (
    <React.Fragment>
        <Navbar darkText={true}/>
        <section className="signup-container">
            <div className="signup-img-container">
                <img src={Auth} alt="authentication"/>
            </div>
            <div className="signup-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>SignUp</h2>
                        <p>Create a new account with email and password.</p>
                        <AuthForm buttonName="SignUp"/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default SignUp