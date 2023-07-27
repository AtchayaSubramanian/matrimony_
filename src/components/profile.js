import React, { useState } from 'react';
import '../css/profilecreate.css'; 
import NavigationBar from './nav';

const ProfileCreate = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [mothertongue, setMothertongue] = useState('');
  const [education, setEducation] = useState('');
  const [family, setFamily] = useState('');
  const [interest, setInterest] = useState('');



  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };
  const handleReligionChange = (e) => {
    setName(e.target.value);
  };

  const handleCasteChange = (e) => {
    setAge(e.target.value);
  };

  const handleMothertongueChange = (e) => {
    setGender(e.target.value);
  };

  const handleEducationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFamilyChange = (e) => {
    setFamily(e.target.value);
  };
  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setAge('');
    setGender('');
    setLocation('');
    setOccupation('');
    setReligion('');
    setCaste('');
    setMothertongue('');
    setEducation('');
    setFamily('');
    setInterest('');
  };

  return (
    <div  className='cake'>
    <div className='fullcontent'>
       <div>
            <NavigationBar/>
          </div>
    <div className="container15">
      <h1 className="dot">Create Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label2>Name:</label2>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label2>Age:</label2>
          <input type="number" value={age} onChange={handleAgeChange} required />
        </div>
        <div className="form-group">
          <label2>Gender:</label2>
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label2>Location:</label2>
          <input type="text" value={location} onChange={handleLocationChange} required />
        </div>
        <div className="form-group">
          <label2>Occupation:</label2>
          <input type="text" value={occupation} onChange={handleOccupationChange} required />
        </div>
        <div className="form-group">
          <label2>Religion:</label2>
          <input type="text" value={religion} onChange={handleReligionChange} required />
        </div>
        <div className="form-group">
          <label2>Caste:</label2>
          <input type="text" value={caste} onChange={handleCasteChange} required />
        </div>
        <div className="form-group">
          <label2>Mother Tongue:</label2>
          <input type="text" value={mothertongue} onChange={handleMothertongueChange} required />
        </div>
        <div className="form-group">
          <label2>Education:</label2>
          <input type="text" value={education} onChange={handleEducationChange} required />
        </div>
        <div className="form-group">
          <label2>Family:</label2>
          <input type="text" value={family} onChange={handleFamilyChange} required />
        </div>
        <div className="form-group">
          <label2>Interest:</label2>
          <input type="text" value={interest} onChange={handleInterestChange} required />
        </div>
        <button className="button8" type="submit">Create</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ProfileCreate;
