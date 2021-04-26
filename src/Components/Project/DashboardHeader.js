import React from 'react';
import {NavLink} from 'react-router-dom';

const DashboardHeader=(props)=> {
  return (
    <div>
    <div className="welcome">
     <h1 className="welcomeText">Welcome to Dashboard</h1>
    </div>
    <section className="projectSection">
    <div className="addProj">
     <p>Project Management System</p>
     <button className="addButton"><NavLink to="/CreateProject" className="nav">Add Project</NavLink></button>
    </div>
    </section>
      
    </div>
  );
}

export default DashboardHeader;