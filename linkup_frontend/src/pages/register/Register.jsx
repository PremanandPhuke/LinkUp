// import React from 'react'
import { useState } from "react";
import "./register.scss"
import Link, { NavLink } from "react-router-dom";
import axios from "axios";

function Register() {

    const [inputs, setInputs]= useState({
        username:"",
        email:"",
        password:"",
        name:""

    })

    const [err, setErr]= useState(false);

    const handleChange= e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async(e) =>{
        e.preventDefault()

        try{
    await axios.post("http://localhost:8800/api/auth/register", inputs)
        }catch(err){
            setErr(err.response.data)
        }
    }

    console.log(inputs);
    console.log(err);


  return (
    <div className="register">
        <div className="card">
            
            <div className="left">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder="Username" required name="username" onChange={handleChange}/>
                    <input type="email" placeholder="Email" required name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>
                    <input type="text" placeholder="Name" required name="name" onChange={handleChange}/>
                    {err && err}
                     {/* Conditional rendering: If err exists and is truthy, render err. Otherwise, render nothing. */}
                    <button onClick={handleClick}>Register</button>

                </form>
            </div>

            <div className="right">
                <h1>LinkUp</h1>
                <p>Welcome to our social media platform! Please log in to connect with friends and share your stories.</p>
                <span>Don't You have an account?</span>
                <NavLink to="/login">
                <button>Login</button>
                </NavLink>
            </div>
        </div>

        {/* <h1>Register</h1> */}

    </div>
  )
}

export default Register