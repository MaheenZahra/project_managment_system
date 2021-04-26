import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import InputField from './InputField';
import './Form.css';

function SignIn(props) {
  const[user, setUser]=useState({
    email:'',
    pwd:'',
  });
  const inputEvent=(event)=>{
    const {name, value}=event.target;
    console.log(value);
   setUser((previousVal)=>{
   return{ 
     ...previousVal, 
     [name]:value
    }
   });
  }
  const submitHandler=(event)=>{
    event.preventDefault();
   }

  return (
       <>
    <form onSubmit={submitHandler} >
       <h1 className="FormHeading">Sign In</h1>
       <InputField classname="inputField" fieldType="email"    fieldName="email" fieldPlaceholder="Enter Email Address" eventHandler={inputEvent} fieldValue={user.email}/>
     <br/>
       <InputField classname="inputField" fieldType="password" fieldName="pwd" fieldPlaceholder="Enter Password" eventHandler={inputEvent} fieldValue={user.pwd}/>
     <br/>
     <button type="submit" value="Sign Up" className="SignUpButton"><NavLink to="/Dashboard" className="nav">Sign In</NavLink></button>
     <p>Not a member?<span> Sign Up</span></p>
   </form>
  </>
    
  );
}

export default SignIn;