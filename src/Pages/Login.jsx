import React from "react";
import './Login.css'
import Navbar from '../components/Navbar'

import { useState } from "react";

function Login() {
    
    const [uname,changeUname] = useState();
    const [upass,changeUpass] = useState();
    

    const handleUnameInput = (e) =>
        {
            changeUname(e.target.value);
            console.log(e.target.value);
        }

    const handleUpasInput = (e) =>
        {
            changeUpass(e.target.value);
            console.log(e.target.value);
        }
    
    const apiLogin = async() =>
        {
            let resp = await fetch(`http://127.0.0.1:8000/api/login?uname=${uname}&upass=${upass}`, {method:'POST'} );
            let data = await resp.json();
            if(data.response_code==200)
                {
                        console.log("Loggin Success");
                }
            else if(data.response_code==401)
                {
                        console.log("Invalid Credentials");
                }
            else if(data.response_code==404)
                {
                        console.log("User not found");
                }
        }
    
    
    
    return (
        <>
            <div className="form-container">
                <div className="form-groupper  p-3">
                        <div class="mb-3">
                            <h2>Login</h2>
                            <label for="uname" class="form-label">Email address</label>
                            <input type="text" onChange={handleUnameInput} class="form-control" id="uname" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="upass" class="form-label">Password</label>
                            <input type="password" onChange={handleUpasInput} class="form-control" id="upass" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={apiLogin} class="btn btn-primary mt-3">Login</button>

                        <hr class="border border-primary border-2 opacity-75"></hr>

                        <button class="btn btn-success mt-3">Create an Account</button>
                </div>



            </div>



        </>

    )
}

export default Login;
