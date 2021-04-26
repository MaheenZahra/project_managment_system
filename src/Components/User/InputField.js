import React from 'react';

const InputField=(props)=> {
  return (
    <div>
       <input className={props.classname} type={props.fieldType} name={props.fieldName}
        placeholder={props.fieldPlaceholder} autoComplete="off" 
        onChange={props.eventHandler} value={props.fieldValue} />
    </div>
  );
}

export default InputField;