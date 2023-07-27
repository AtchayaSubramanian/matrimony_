import React from "react";
// import homeback from "./photo/home back.webp";
import NavigationBar from "./nav";
import "../css/home.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Home(){
   const user=useSelector(state => state.user.value)
  
    return(
         <div className="home">
            <div className="navdiv">
            <NavigationBar />
            </div>
            <div className="contain">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <p className="text19">"Two souls, one journey. Find your perfect match on our matrimonial website."</p>
                <br/>
            </div>
                {/* <p>{user.name}</p> */}
              <Link to="/profileshow"><button className="tex-btn">Get Started</button></Link>
            </div>
         </div>
    );
}