import logo from './logo.svg';
import './App.css';
import Login from './login';
import React, {useState} from 'react';

import { loginContext } from './loginContext';
import Profile from './profile';
function App() {
    const [productname,setProductname]=useState("")
    const [productprize,setProductprize]=useState("")
    const [quality,setQuality]=useState("")
    const [description,setDescription]=useState("")



  const [profile,setProfile]=useState(false)
  return (
    <div className="App">
      <loginContext.Provider value={{setProfile,productname,setProductname,productprize,setProductprize,quality,setQuality,description,setDescription}}>
        {
          profile?<Profile />:<Login />
        }
      </loginContext.Provider>
    
    </div>
  );
}

export default App;
