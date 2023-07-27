import React from 'react';
import '../css/nav.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ButtonAppBar() {
  return (
    
    <nav className="navbar">
       {/* <Navbar.Brand href="#"> */}
          <img src={require("../logo1.jpg")} alt="Logo" id="logo-image" />
        {/* </Navbar.Brand> */}
      <a  className="logo99">SoulSearch</a>
     
      <ul className="nav-menu">
      <Link to="/profileshow " className="as"><li><a href="#home">Home</a></li></Link>
      <Link to="/search" className="as"><li><a href="#home">Search</a></li></Link>

        <Link to="/match" className="as1"><li><a href="#home">Matches</a></li></Link>
      
      </ul>
    </nav>

  );
}

export default ButtonAppBar;
