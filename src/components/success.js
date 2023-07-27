import { blue } from "@mui/material/colors";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./nav";

import { Link } from 'react-router-dom';

import "../css/success.css"
const Card2=()=>{
  
    return(
        <React.Fragment>
          <div className="bull">
           <div className="navdiv">
            <NavigationBar />
            </div>
            <div class="container5">
              
  <div className="row5">
    
    <div className="col-sm5"><div class="card5">
 <img class="card-img-top5" src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" height="230"/>
  <div class="card-body5">
  <Link to="/success1"><button className="sign"><h5 >Success Stories</h5></button></Link>
 
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'orange'}}>50,000+ users found their matches through usoul search.</p>
  </div>
</div></div>
    <div className="col-sm5" ><div class="card5">
  <img class="card-img-top5" src="https://i.pinimg.com/originals/d8/42/25/d84225631fc9b97e471e180045ec0e6b.jpg" alt="Card image cap" height="230"/>
  <div class="card-body5">
  <Link to="/feed"><button className="sign"><h5 >Feedback</h5></button></Link>
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'orange'}}>Profiles are manually screened by our team before publishing.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm5" ><div class="card5">
  <img class="card-img-top5" src="https://media.istockphoto.com/id/1064911922/photo/beautiful-wedding-couple-in-park.webp?b=1&s=170667a&w=0&k=20&c=6FUWmQy-Ih0nhwNnKoSqp5zfEPtOsAtPmtlKHBDnkGo=" alt="Card image cap" height="230"/>
  <div class="card-body5">
  <Link to="/paid"><button className="sign"> <h5>Paid Membership</h5></button></Link>
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'orange'}}>Profiles are manually screened by our team before publishing.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
  </div>
</div>
</div>
        </React.Fragment>
    )
}
export default Card2;