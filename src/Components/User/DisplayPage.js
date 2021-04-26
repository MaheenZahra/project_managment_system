import React from 'react';
import Main from './Main';
import Dashboard from '../Project/Dashboard';
import SignIn from './SignIn';
import RegistrationForm from './RegistrationForm';
import CreateProject from '../Project/CreateProject';
import {Route,Switch} from 'react-router-dom';
import ProjectDetail from '../Project/ProjectDetail';

const DisplayPage=(props) =>{
  
  return (
   <div> 
  <Switch>
<Route exact path="/" component={Main} /> 
<Route path="/SignIn" component={SignIn} />
<Route path="/RegistrationForm" component={RegistrationForm} />
<Route path="/Dashboard" component={Dashboard} /> 
<Route path="/CreateProject" component={CreateProject} />
<Route path="/ProjectDetail" component={ProjectDetail} />
  </Switch>
    </div>
  );
}

export default DisplayPage;