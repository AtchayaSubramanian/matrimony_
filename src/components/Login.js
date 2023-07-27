import { Link } from "react-router-dom";
// import axios from "axios";
import React, { Component } from "react";
import "../css/login.css";
import { useDispatch } from 'react-redux';
import {login} from '../redux/store';
import { useState } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Register() {

    const [pname, setPname] = useState('');
    const dispatch = useDispatch();
  
  
    const handleChange = (e) => {
      setPname(e.target.value);
    }
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const validateEmail = (email) => {
  
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
      return pattern.test(email);
    }
    const navigate = useNavigate();
  
    const handleFormSubmit = async(e) => {
      e.preventDefault();
      
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      try{
        const responce=await axios.post("http://localhost:8181/api/v1/auth/authenticate",{email,password});
        navigate('/home');
        let token=responce.data.token;
        let user=responce.data.userResponce;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user));
      }
      catch(error){
        console.error("Error: " ,error);
        alert("Password is Incorrect");
      }
      setEmailError('');
    }
    return(
      <div className="logLogin" >
    <div className="reg">    
        <form id="regform" name="suForm" onSubmit={handleFormSubmit} >    
          
          <label className="name10" id="name1" ><b>Email ID:</b>
          </label>
          <input type="email" id="uname" placeholder="Email Id"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          {/* value={pname} onChange={handleChange}   />  */}
           
          <br /><br /> <br /><br /> 
          <label className="name10" id="name1" ><b>Password:</b>
          </label>
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} id="uname" placeholder="Password"  /> 
      
         
          <button className="button1" type="submit" >Login</button>
          <br/>
          <Link to="/Reg"><p className="register-link1" id='reg-link'>Create an Account </p></Link>
        {/* <p className="register-link2"><Link to="/Regester">Forget Password?</Link> </p> */}
        </form>
      </div></div>
);
          }

export default Register;