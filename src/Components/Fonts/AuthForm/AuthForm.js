import React from 'react'

const AuthForm = ({ buttonName }) => {
  return (
    <form>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" placeholder="Enter Your Email"/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-input" placeholder="Enter Your Password"/>
        </div>
        <div className="form-group">
            <input type="submit" className="button-primary" value={buttonName}/>
        </div>
    </form>
  )
}

export default AuthForm