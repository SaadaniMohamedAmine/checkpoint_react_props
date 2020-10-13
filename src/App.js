import React from 'react';
import Profile from './profile/Profile.js'
import Avatar from './avatar.jpg'
import './App.css';


function App() {
  const handleName=(name)=>alert(name) ;
  return (
    <div>
      <Profile handleName={handleName}>
        <img src={Avatar} alt="avatar" className="img"/>
      </Profile>
      </div>  
  )
    
}

export default App;
