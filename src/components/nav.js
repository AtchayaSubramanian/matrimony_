import React from 'react';
import '../css/nav.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function NavigationBar() {
  const user=useSelector(state => state.user.value)
  return (
    
    <nav className="navbar">
       {/* <Navbar.Brand href="#"> */}
          <img src={require("../logo1.jpg")} alt="Logo" id="logo-image" />
        {/* </Navbar.Brand> */}
      <a  className="logo99">SoulSearch</a>
     
      <ul className="nav-menu">
      <Link to="/home" className="as"><li><a href="#home">Home</a></li></Link>
        <Link to="/about" className="as"><li><a href="#home">AboutUs</a></li></Link>
        <Link to="/Success" className="as"><li><a href="#home">Details</a></li></Link> 
        <Link to="/profile" className="as1"><li><a href="#home">profile</a></li></Link>
        <Link to="/" className="as1"><li><a href="#home">Logout</a></li></Link>
        <p className="nav-menu">{user.name}</p>
      
      </ul>
    </nav>

  );
}

export default NavigationBar;
