import '../css/profileshow.css'
import  image1 from  './women6.jpg';
import  image2 from  './men5.jpg';
import  image3 from  './women4.jpg';
import  image4 from  './men4.jpg';
import { Link } from 'react-router-dom';

import NavigationBar from './nav';

import ButtonAppBar from './nav1';
import Bar from './nav1';
function ProfileShow(){
    const courses = [
        {
         
           imageSrc: image1,
           Name: 'Shruthi',
           Age: 25,
           Profession: 'Dubbing Artist',
           
            // avatar: tutor1
        
        },
        {
          imageSrc: image2,
          Name: 'Sarath',
          Age: 27,
          Profession:'Doctor',
         
            // avatar: tutor2
          
        },
        {
          
         imageSrc: image3,
          
            Name: 'Charu',
            Age: 24,
            Profession: 'Sales Excutive',
            // avatar: tutor3
          
        },
        {
           imageSrc: image4,
            Name: 'Arya',
            Age: 30,
            Profession: 'Professor'
            // avatar: tutor4
          
        }
      ];
      return(
        <div>
           <div className="navdiv">
            <ButtonAppBar/>
            </div>
            
            <div className="p97">
            <select className='filter-box'>
      <option>Filter</option>
      
    </select>
      
      <div className="carousel-container">
        {courses.map((course, index) => (
          <div className="courses-card" key={index}>
            <div className="card-header">
              <img src={course.imageSrc} className="card-img-top"  />
            </div>
              <div className="card-body">
               <div className="name98">
                <p>{course.Name}</p>
                <p>{course.Age}</p>
                <p>{course.Profession}</p>
                <button>view profile</button>
              </div> 
            </div>  
            {/* <div className="card-footer">
              <img src={course.tutor.avatar} className="card-footer-tutors-img" alt="Tutor" />
              <p className="tutors-name">{course.tutor.name}</p>
             
            </div> */}
          </div>
        ))}
      </div>
    </div>
        </div>
      )
}
export default ProfileShow