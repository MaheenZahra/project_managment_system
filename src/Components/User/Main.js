import React from 'react';
import {NavLink} from 'react-router-dom';
import './Main.css';

const Main=(props)=> {
  return (
    <>
    <section className="projName">
      <h1 className="logo">Manegeria</h1>
       <div class="content"></div>
       <nav>
       <h3>Manegeria makes project management real fun
       <br/>
       The open source <span className="Highlight">project managment system</span></h3>
       <NavLink exact to="/"></NavLink>
       <button><NavLink to="/SignIn"  className="linkStyle">Sign In</NavLink></button>
       <button><NavLink to="/RegistrationForm"  className="linkStyle">Sign Up</NavLink></button>
       </nav>  
    </section>
     
    </>
  );
}

export default Main;