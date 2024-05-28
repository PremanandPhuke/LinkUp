// import React from 'react'
import { useContext, useState } from "react";
import "./login.scss";
import Link, { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios"

const Login = () => {
  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async(e) => {

    e.preventDefault()
    try{
      await login(inputs);
      navigate("/");
    }catch(err){
      setErr(err.response.data)
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World...</h1>
          <p>
            Welcome to our social media platform! Please log in to connect with
            friends and share your stories.
          </p>
          <span>Don't You have an account?</span>
          <NavLink to="/register">
            <button>Register</button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" required  name="username" onChange={handleChange}/>
            <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>

            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
      {/* <h1>Login</h1> */}
    </div>
  );
};

export default Login;
