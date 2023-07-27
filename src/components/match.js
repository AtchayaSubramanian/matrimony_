import React from 'react';
import '../css/match.css';
 import   im from './men4.jpg';
 import   ima from './men5.jpg';
import NavigationBar from './nav';
import ButtonAppBar from './nav1';
import { Link } from 'react-router-dom';
const MatchPage = () => {
  const profiles = [
    {
      id: 1,
      name: 'Profile 1',
      age: 25,
      location: 'coimbatore, tamilnadu',
      about: 'doctor',
      preferences: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photo: im,
    },
    {
      id: 2,
      name: 'Profile 2',
      age: 28,
      location: 'salem , tamilnadu',
      about: 'Software Engineering',
      preferences: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photo: ima,
    },
    // Add more profile objects here
  ];

  const handleConnect = (profileId) => {
    // Perform action when the "Connect" button is clicked
    console.log(`Connect clicked for profile with id ${profileId}`);
  };

  return (
    <div>
    <div>
      <ButtonAppBar/>
      </div>
    <div className="conta">
      <h1 className='queen'>Best matches</h1>
      {profiles.map((profile) => (
        <div className="profilecard" key={profile.id}>
          <img src={profile.photo} alt={profile.name} />
          <div className="details">
            <h2 className='quee'>{profile.name}</h2>
            <p className='wee'>Age: {profile.age}</p>
            <p className='wee'>Location: {profile.location}</p>
            <p className='wee'>About Me: {profile.about}</p>
            <p className='wee'>Partner Preferences: {profile.preferences}</p>
          </div>
          <div className="buttoncontainer">
            <Link to="/request"><button
              className="buttonbutt"
              onClick={() => handleConnect(profile.id)}
            >
              Send Request
            </button></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MatchPage;