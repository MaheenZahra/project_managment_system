import React from 'react';
import {NavLink} from 'react-router-dom';

const BackButton=(props)=> {
  return (
    <div>
       <button className="backButton"><NavLink to={props.link} className="back">&#706;</NavLink></button>
    </div>
  );
}

export default BackButton;