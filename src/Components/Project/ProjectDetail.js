import React from 'react';

const ProjectDetail=(props)=> {
  return (
    
    <div className="projectName">
     
      <h1>Project Name:  {props.Name}</h1>
      <h1>Project Detail: {props.Detail}</h1>
    
      </div>
   
  );
}

export default ProjectDetail;