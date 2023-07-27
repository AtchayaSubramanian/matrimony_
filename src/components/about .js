import React from 'react';
import '../css/about.css'
import NavigationBar from './nav';
const About = () => {
  return (
    <div>
          {/* <h1>About Us</h1> */}
          <div className='abo'>
          <div className='gd'>
            <NavigationBar/>
          </div>
          <div className='ar'>
          {/* <div className="Head"> */}
          <p className="Head">Welcome to our matrimony!</p>
          {/* </div> */}
          <div className="mi">
          <p>We understand the importance of finding the perfect life partner.</p>
          <p>We aim to make the journey of finding love easier and more enjoyable.</p>
          </div >
          <h2 className="we">Our Motive</h2>
          <div className="mission">
          <p>Our mission is to create a safe and trusted platform where individuals can find their ideal life partner.</p>
          <p>We are committed to providing a user-friendly experience, robust privacy features, and advanced search options to ensure compatibility and compatibility.</p>
          </div>
          <p className="con">We have a dedicated team of professionals who are passionate about helping our users in their journey to find love.</p>
           
          
          {/* <h2>Contact Us</h2>
          <p>If you have any questions, feedback, or inquiries, please feel free to reach out to our team. We are here to assist you!</p>
          <p>Email: info@matrimonialwebsite.com</p>
          <p>Phone: 123-456-7890</p> */}
        </div>
        </div>
        </div>
        
   
  );
}

export default About;
