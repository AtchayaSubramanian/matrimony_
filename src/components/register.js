import { Link } from "react-router-dom";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import  { Component } from "react";
// import { login } from '../user';
import React, { useState } from 'react';
//  import "./css/register.css";
import "../css/register.css";
import {login} from '../redux/store';
import { useDispatch } from 'react-redux';
function Reg () {
  
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name,setName]=useState('');
 
  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('');
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const responce=await axios.post('http://localhost:8181/api/v1/auth/register',{name,email,password});
      if(responce.status==200){
        navigate('/');
        setName('');
        setPassword('');
        setEmail('');
      }
    }
    catch(error){
      console.error("Error: " ,error);
    }
  }
    return(
      <div className="log11" >
    <div className="ll1">    
        <form id="regform" name="suForm" onSubmit={handleSubmit}>    
          <label className="name100" ><b>First Name:</b></label><br/><br/>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="xname" id="xname" placeholder="First Name" on />   
          <br/><br/> 
          {/* <label className="name100"><b>Last Name:</b></label><br/><br/>
          <input type="text" id="xname" placeholder="Last Name"  /> 
          <br /><br /> */}
          <label className="name100" ><b>Email ID:</b></label><br/><br/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="xname" placeholder="Email Id"  /> 
          <br/><br/>
          {/* <label className="name100" ><b>Contact No:</b></label><br/><br/>
          <input type="text" id="xname" placeholder="Contact Number"  /> 
          <br /><br />  */}
          <label className="name100" ><b>Password:</b></label><br/><br/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="xname" placeholder="Password"  /> 
          <br/><br/>
          {/* <label className="name10"><b>Confirm Password:</b></label><br/><br/>
          <input type="password" id="xname" placeholder="Confirm Password"/>
          <br/><br/> */}
          <button className="button2" type="submit" onClick={() => dispatch(login({ name:name}))}>Register</button>
        </form>
      </div></div>
);
          }
        
export default Reg;