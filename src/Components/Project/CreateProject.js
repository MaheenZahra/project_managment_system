import React,{useState} from 'react';
import BackButton from './BackButton';
import InputField from '../User/InputField';
import DashboardHeader from './DashboardHeader';
import ProjectDetail from './ProjectDetail';

const CreateProject=(props)=> {

  const [inputData, setInputData] = useState({
    projName:'',
    projDetail:'',
    projLogo:''
  });
  const [items, setItems] = useState([{}]);

  const addItem = () => {
        if (!inputData) {}
        else {
            setItems([...items, inputData]);
            setInputData('');
           
        }
    }
    const inputEvent=(event)=>{
    const {name, value}=event.target;
    console.log(value);
    setInputData((prevVal)=>{
      return{ 
        ...prevVal, 
        [name]:value
       }
    });
    }

  return (
    <>
     <BackButton link='/Dashboard'/>
     <DashboardHeader/>
     <div className="addItems">
      <InputField classname="inputField projField" fieldType="text" fieldName="projName" fieldPlaceholder="Project Name" 
       fieldValue={inputData.projName} eventHandler={inputEvent}/>

      <textarea className="projData projField" type="text" placeholder="Project Detail" name="projDetail"
       value={inputData.projDetail} onChange={inputEvent}></textarea>

      <InputField classname="inputField projField" fieldType="file" fieldName="projLogo" fieldPlaceholder="Project Logo" 
       fieldValue={inputData.projLogo} eventHandler={inputEvent}/>
      <button type="submit" title="Add Item" onClick={addItem}>Add</button>
    </div>
   
    <div className="showItems">
    { items.map((elem, ind) => {
     return ( <div className="eachItem" key={ind}>
      <ProjectDetail Name={elem.projName} Detail={elem.projDetail} />
    
      </div>) })  }
    </div>
    </>
  );
}

export default CreateProject;