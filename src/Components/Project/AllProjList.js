import React from 'react';

const AllProjList=(props)=> {
  return (
    <div>
      <div className="proj">
      <img src={props.logo} alt="logo"/> 
      <h1>{props.projName}</h1>
      <h1 className="date">{props.date}</h1>
     </div>
    </div>
  );
}

export default AllProjList;