import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const[alert,newalert]=useState(null);

  const showalert=(type,message)=>{
    newalert({
     message:message,
     type:type
    })
 }
 
 const clearalert=()=>{
  setTimeout(()=>{
    newalert(null)
  },2000)
 }
  const togglemode=()=>{
    if(mode==="light"){
     setmode("dark")
     document.body.style.backgroundColor='#042743'
     showalert("success","dark mode is Enabled")
     clearalert()
    }
    else{
        setmode("light")
        document.body.style.backgroundColor='white'
        showalert("success","light mode is Enabled")
        clearalert()
    }
     }
  return (
   <>
   <Router>
 <Navbar title="TextUtils" about="about us" mode={mode} togglemode={togglemode}/>  
 <Alert alert={alert}/>
 <div className="container my-3">
 <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route exact path="/">
      <TextForm header="enter the text to analyze" mode={mode} showalert={showalert} clearalert={clearalert}/>
      </Route>
 </Switch>
 


 </div>

  
 </Router>
   

</>
    
  
  );
}

export default App;
