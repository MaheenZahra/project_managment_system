import React from 'react';
import BackButton from './BackButton';
import logo from '../../assets/logo1.jpg';
import './Dashboard.css';
import DashboardHeader from './DashboardHeader';
import AllProjList from './AllProjList';

const Dashboard=(props)=> {
  const list=[{
        id:1,
        name:'Project 1',
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        logo:logo
               },
       {  
         id:2,
         name:'Project 2',
         detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
         logo:logo
                },
        {
         id:3,
         name:'Project 3',
         detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
         logo:logo
          }
]
  
  return (
    <>
    <BackButton link='/'/>
    <DashboardHeader/>
    <section className="projDisplay" >
     { list.map(item=>{
       return(<AllProjList logo={item.logo} projName={item.name} date={Date()}/>) 
     })}
    </section >
    

    </>
  );
}

export default Dashboard;