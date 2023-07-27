import { blue } from "@mui/material/colors";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./nav";
import { Link } from 'react-router-dom';

 import "../css/success1.css";
import Card10 from "./success2";
const Card9=()=>{
  
    return(
        <React.Fragment>
          <div>
           <div className="navdiv">
            <NavigationBar />
            </div>
            <div>
              <Card10/>
            </div>
            <div class="container6">
              
  <div className="row6">
    
    <div className="col-sm6"><div class="card5">
 <img class="card-img-top6" src="https://imagecdn.jeevansathi.com/39243/8/784868805-1688929260.jpg" alt="Card image cap" height="270"/>
  <div class="card-body5">
  <h7>Akash weds Kritika</h7>
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'white'}}>I met my partner Sagar on soul search.Once the lockdown was 
    bit relaxed we completed the family meeting and finalized our wedding on 20 September 2020. Everything was very smooth from the beginning to 
    this date 06 Apr 2022, when I thought of writing this story.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>

    <div className="col-sm6" ><div class="card5">
  <img class="card-img-top6" src="https://imagecdn.jeevansathi.com/39158/13/783173955-1688755283.jpg" alt="Card image cap" height="270"/>
  <div class="card-body5">
    <h7>Saurabh Gupta weds Anjali Goyal</h7>
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'white'}}>We met on January 2023 and got engaged and married in April.
     The profiles helped us find common interests and suitable information about each other. Thanks soulsearch.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm6" ><div class="card5">
  <img class="card-img-top6" src="https://imagecdn.jeevansathi.com/39321/2/786422263-1689100757.jpg" alt="Card image cap" height="270"/>
  <div class="card-body5">
   <h7>manoj weds priya</h7>
    <p class="card-text5" style={{fontSize:20,fontFamily:'inherit',color:'white'}}>
  We have met on soul search, started interacting with each other and knowing the habits ,
  atlast we came to the conclusion to involve our parents so we have decided to let them meet,on 23rd April we got engaged, now we are preparing for our wedding.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>


  </div>
</div>
</div>
        </React.Fragment>
    )
}
export default Card9;
