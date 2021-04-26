import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import InputField from './InputField';
import './Form.css';



const RegistrationForm=()=> {
  const[user, setUser]=useState({
    fullname:"",
    email:'',
    pwd:'',
    confirmPwd:''
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
       <h1 className="FormHeading">Sign Up</h1>
       <InputField classname="inputField" fieldType="text"     fieldName="fullname" fieldPlaceholder="Enter Full name" eventHandler={inputEvent} fieldValue={user.fullname}/>
     <br/>
       <InputField classname="inputField" fieldType="email"    fieldName="email" fieldPlaceholder="Enter Email Address" eventHandler={inputEvent} fieldValue={user.email}/>
     <br/>
       <InputField classname="inputField" fieldType="password" fieldName="pwd" fieldPlaceholder="Enter Password" eventHandler={inputEvent} fieldValue={user.pwd}/>
     <br/>
       <InputField classname="inputField" fieldType="password" fieldName="confirmPwd" fieldPlaceholder="Enter Password Again" eventHandler={inputEvent} fieldValue={user.confirmPwd}/>
     <br/>
       <button type="submit" value="Sign Up"  className="SignUpButton"><NavLink to="/Dashboard" className="nav">Sign Up</NavLink></button>
    
     <p>Already a member?<span> Sign In</span></p>
   </form>
   
   
  </>
  );
}

export default RegistrationForm;